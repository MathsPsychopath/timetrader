import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import NavBar from "../NavBar/NavBar";
import { MdHome } from "react-icons/md";

describe("The navbar should have icons", () => {
  test("It should have the home icon", () => {
    render(<NavBar />);

    expect(screen.getByLabelText("Home").firstChild);
  });
});
