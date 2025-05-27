import * as Yup from "yup";
import "yup-phone-lite";

export const formSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phonenumber: Yup.string()
    .phone("UA", "Invalid phone number for Ukraine")
    .required("Required"),
});