import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";
import Error from "./error";
import { useState } from "react";
import * as yup from "yup";

export default function Login() {
  const [error, setError] = useState([]);
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = async (error: string) => {
    setError([]);
    try {
      const schema = yup.object().shape({
        email: yup.string().email("Invalid email").required(),
        password: yup
          .string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is Required"),
      });
      await schema.validate(formdata, { abortEarly: false });
    } catch (error) {
      const newError = {};
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <Error message="Some Error Occurred while logging in" />
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
          <Error message="Invalid email" />
        </div>
        <div className="space-y-1">
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button>
          {true ? <BeatLoader size={10} color="#36d7b7" /> : "Login"}
        </Button>
      </CardFooter>
    </Card>
  );
}
