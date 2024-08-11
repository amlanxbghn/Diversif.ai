const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		console.log("Received request to create user:", req.body);

		const { error } = validate(req.body);
		if (error) {
			console.log("Validation error:", error.details[0].message);
			return res.status(400).send({ message: error.details[0].message });
		}

		const user = await User.findOne({ email: req.body.email });
		if (user) {
			console.log("User already exists with email:", req.body.email);
			return res
				.status(409)
				.send({ message: "User with given email already exists!" });
		}

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({ ...req.body, password: hashPassword });
		await newUser.save();

		console.log("User created successfully:", newUser);
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		console.error("Error while creating user:", error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
