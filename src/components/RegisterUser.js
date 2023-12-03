import axios from "axios";
import React, { useEffect, useState } from "react";

export default function RegisterUser() {
  const [formData, setFormData] = useState({
    fullName: "",
    identity: "",
    email: "",
    phone: "",
    organization: "",
    otherOrganization: "",
    organizationAddress: "",
  });

  const [clients, setClients] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchOrgs();
  }, []);

  const fetchOrgs = async () => {
    const orgs = await axios
      .get("http://localhost:8080/api/v1/client")
      .then((response) => {
        return response.data.data.map((e) => e.name);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    setClients(orgs);

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
    if (!formData.organization) {
      newErrors.organization = "Organization is required";
    } else if (
      formData.organization === "Other" &&
      !formData.otherOrganization
    ) {
      newErrors.otherOrganization = "Please specify the organization";
    }
    if (formData.organization === "Other" && !formData.organizationAddress) {
      newErrors.organizationAddress = "Please provide the organization address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission here
      console.log(formData);
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
      </div>
    </div>
  );
}
