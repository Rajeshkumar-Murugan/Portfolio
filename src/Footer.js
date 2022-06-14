import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Footerstyle.css";
import { toast } from "react-toastify";
import axios from "axios";

function Footer() {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      address: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      mobile: yup
        .string()
        .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/gm, "Invalid Number")
        .required("Mobile Number is required"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
      message: yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      sendmail(values, null, 2);
    },
  });

  let sendmail = async (val) => {
    try {
      let res = await axios.post(
        "https://modelprintingserver.herokuapp.com/users/Message",
        val
      );
      toast.success("Mail sent");
    } catch (error) {
      toast.error("Mail not sent");
      console.log(error);
    }
  };

  return (
    <div className=" footer">
      <div className="mainheading mx-auto">
        <b>Contact</b>
      </div>

      <div className="container-fluid highlights ">
        <div
          className="row d-flex flex-row  justify-content-md-center "
          id="contactUs"
        >
          <div
            className="col-12 col-md-6 in-left"
            id="contactForm"
            style={{ animationDuration: "3s" }}
          >
            <form onSubmit={formik.handleSubmit}>
              <label for="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              ) : null}

              <label for="name">Mobile</label>
              <input
                id="mobile"
                name="mobile"
                type="mobile"
                className="form-control"
                placeholder="Enter Mobile"
                onChange={formik.handleChange}
                value={formik.values.mobile}
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <div style={{ color: "red" }}>{formik.errors.mobile}</div>
              ) : null}

              <label for="name">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}

              <label for="address">Address</label>
              <textarea
                id="address"
                name="address"
                type="text"
                className="form-control"
                placeholder="Enter address"
                onChange={formik.handleChange}
                value={formik.values.address}
              />

              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                type="text"
                className="form-control"
                placeholder="Enter message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message ? (
                <div style={{ color: "red" }}>{formik.errors.message}</div>
              ) : null}

              <br />

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          <div
            className="col-12 col-md-6 in-right"
            id="contactDetails"
            style={{ animationDuration: "3s" }}
          >
            <div className="contactinform">
              <p>Name: Rajesh Kumar</p>
              <p>Phone Number: +919551052326</p>
              <p>Address: 111/75 Palla Street,</p>
              <p>Korattur North,</p>
              <p>Tamilnadu, India</p>
              <p>Chennai-600 0762</p>
              <p>Email:<a href="mailto:rajeshkumarmurugan1@gmail.com" target="_blank"> rajeshkumarmurugan1@gmail.com</a></p>
            </div>
            <div>
              <a href="https://www.facebook.com/RajeshRhaegal/" target="_blank">
                <i
                  className="fa-brands fa-facebook-square fa-2xl"
                  
                ></i>
              </a>
              <a href="https://twitter.com/Rajesh_Randolph" target="_blank">
                <i className="fa-brands fa-twitter fa-2xl"></i>
              </a>
              <a
                href="https://wa.me/919551052326/?text=Hi%20I%20will%20get%20in%20touch%20with%20you%20very%20soon."
                target="_blank"
              >
                <i
                  className="fa-brands fa-whatsapp-square fa-2xl"
                 
                ></i>
              </a>
              <a
                href="https://www.instagram.com/rajesh_raveen/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram-square fa-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rajesh-kumar-murugan-710841208"
                target="_blank"
              >
                <i class="fab fa-linkedin fa-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footerdata ">
        <p className="text-center">Website designed by Rajesh Kumar</p>
      </div>
    </div>
  );
}

export default Footer;
