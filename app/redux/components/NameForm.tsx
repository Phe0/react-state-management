"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { setName } from "@/lib/features/name/nameSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Name } from "@/types/Name";
import { FormEvent, useState } from "react";

export default function NameForm() {
  console.count("NameForm");

  const dispatch = useAppDispatch();

  const [nameForm, setNameForm] = useState<Name>({
    firstName: "",
    lastName: "",
  });

  function handleFirstNameChange(event: FormEvent<HTMLInputElement>) {
    setNameForm({
      ...nameForm,
      firstName: event.currentTarget.value,
    });
  }

  function handleLastNameChange(event: FormEvent<HTMLInputElement>) {
    setNameForm({
      ...nameForm,
      lastName: event.currentTarget.value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(setName(nameForm));
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <Input
        id="first-name"
        label="First Name"
        onChange={handleFirstNameChange}
      />
      <Input id="last-name" label="Last Name" onChange={handleLastNameChange} />
      <Button submit>Save</Button>
    </form>
  );
}
