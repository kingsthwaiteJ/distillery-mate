"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  MenuItem,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";

const CreateConsumableForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    type: "",
    quantity: "",
  });

  const router = useRouter();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target?.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/consumables", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // alert("Object created successfully!");
        setFormData({ name: "", brand: "", price: "", type: "", quantity: "" });
        const payload = await response.json();
        if (payload.data.id) {
          router.push(`/inventory/consumables/${payload.data.id}`);
        }
      } else {
        alert("Failed to create object");
      }
    } catch (error) {
      console.error("Error creating object:", error);
      alert("Error creating object");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Create Consumable
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          select
          label="Type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          fullWidth
        >
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Furniture">Furniture</MenuItem>
          <MenuItem value="Clothing">Clothing</MenuItem>
        </TextField>
        <TextField
          label="Quantity"
          name="quantity"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default CreateConsumableForm;
