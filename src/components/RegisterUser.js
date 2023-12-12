import axios from "axios";
import React, { useEffect, useState } from "react";

export default function RegisterUser() {
  const [formData, setFormData] = useState({
    fullName: "",
    identity: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    organization: "",
    otherOrganization: "",
    organizationAddress: "",
  });

  const [clients, setClients] = useState([]);
  const [errors, setErrors] = useState({});
  const [successModal, setSuccessModal] = useState(false);

  useEffect(() => {
    fetchOrgs();
  }, []);

  const fetchOrgs = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/client");
      const orgs = response.data.data.map((e) => e.name);
      setClients(orgs);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required";
    }
    if (!formData.identity) {
      newErrors.identity = "Identity is required";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    }
    if (!formData.email) {
      newErrors.email = "Email address is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.organization) {
      newErrors.organization = "Organization is required";
    } else if (
      formData.organization === "Other" &&
      !formData.otherOrganization
    ) {
      newErrors.otherOrganization = "Please specify the organization";
    }
    if (formData.organization === "Other" && !formData.organizationAddress) {
      newErrors.organizationAddress =
        "Please provide the organization address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/user",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Show success modal
        setSuccessModal(true);

        // You may want to perform additional actions based on the response
        console.log(response.data);
      } catch (error) {
        // Handle errors, for example, log the error to the console
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          Student Registration
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-bold text-gray-600"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="text-red-600 mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* ... (other form fields) */}

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-bold text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-600 mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-bold text-gray-600"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-600 mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="identity"
              className="block text-sm font-bold text-gray-600"
            >
              Identity
            </label>
            <input
              id="identity"
              name="identity"
              type="text"
              autoComplete="off"
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              onChange={handleChange}
            />
            {errors.identity && (
              <p className="text-red-600 mt-1">{errors.identity}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-600"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-200 focus:outline-none focus:ring-2 focus:-ring-inset focus:ring-indigo-600"
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-bold text-gray-600"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indset focus:ring-indigo-600"
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="mb-4">
        <label htmlFor="organization" className="block text-sm font-bold text-gray-600">
          Organization
        </label>
        <select
          id="organization"
          name="organization"
          required
          className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          onChange={handleChange}
          value={formData.organization}
        >
          <option value="" disabled>
            Select an organization
          </option>
          {clients.map((org, index) => (
            <option key={index} value={org}>
              {org}
            </option>
          ))}
           <option value="Other">
            Other
          </option>
        </select>
        {errors.organization && <p className="text-red-600 mt-1">{errors.organization}</p>}
      </div>

          {formData.organization === "Other" && (
            <div className="mb-4">
              <label
                htmlFor="otherOrganization"
                className="block text-sm font-bold text-gray-600"
              >
                Other Organization
              </label>
              <input
                id="otherOrganization"
                name="otherOrganization"
                type="text"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indset focus:ring-indigo-600"
                onChange={handleChange}
              />
              {errors.otherOrganization && (
                <p className="text-red-600 mt-1">{errors.otherOrganization}</p>
              )}
            </div>
          )}

          {formData.organization === "Other" && (
            <div className="mb-4">
              <label
                htmlFor="organizationAddress"
                className="block text-sm font-bold text-gray-600"
              >
                Organization Address
              </label>
              <textarea
                id="organizationAddress"
                name="organizationAddress"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                onChange={handleChange}
              />
              {errors.organizationAddress && (
                <p className="text-red-600 mt-1">
                  {errors.organizationAddress}
                </p>
              )}
            </div>
          )}

          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-bold text-white bg-indigo-600 rounded-lg focus:outline-none hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Success Modal */}
        {successModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                Registration Successful
              </h2>
              <p>Your registration was successful. Thank you!</p>
              <button
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
                onClick={() => setSuccessModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
