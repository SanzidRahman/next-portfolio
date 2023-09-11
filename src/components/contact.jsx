import SectionHeading from "./section-heading";

export default function Contact() {
  return (
    <section>
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-center">Please contact me at md.sanzid@gmail.com</p>

      <form className="flex flex-col mt-6 ">
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="h-12 border border-black pl-3 rounded-xl mt-3 sm:w-[36rem]"
        />
        <textarea className="h-52 border border-black mt-3 pl-3" />
        <button
          className="h-12 p-3 bg-blue-500/40 rounded-full w-32 mt-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
