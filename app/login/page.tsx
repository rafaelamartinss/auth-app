import Form from "next/form";
export default function SignUp() {
  return (
    <div className="flex justify-center">
      <Form action="" className="flex flex-col w-7/12 gap-2">
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" />
        <button type="submit" className="bg-slate-600 w-28 rounded">
          Sign up
        </button>
      </Form>
    </div>
  );
}
