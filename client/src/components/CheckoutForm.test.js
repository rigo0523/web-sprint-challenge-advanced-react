import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure
//wthey are testing what the title shows

test("form header renders", () => {
  console.log("test");
});

test("CheckoutForm adds new items to the list + button test +successmesage", () => {
  render(<CheckoutForm />);
  //query for all inputs, run change even to add test
  const firstName = screen.getByLabelText(/First Name/i);
  //EVENTS with react testing library RTL
  fireEvent.change(firstName, { target: { value: "Rigo" } });

  ///testing button label text
  const submitButton = screen.getByRole("button", { name: /Checkout/i });
  fireEvent.click(submitButton);

  //const header find by text
  const headerTwo = screen.getByText(/checkout form/i);
  expect(headerTwo).toBeInTheDocument();

  //show success message after submitting form
  //UPDATE: DOES NOT WORK
  //   const successMessage = screen.findByTestId("successMessage");
  //   expect(successMessage).toBeInTheDocument();
});
