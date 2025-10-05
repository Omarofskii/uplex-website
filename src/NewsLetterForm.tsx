import { useState } from "react";

function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    await fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScf9F9exnIWYY-FQsHJd3oB148F2oXo67QLSi8nPYTCXsh3Qg/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    );

    form.reset();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto mt-8"
      >
        <input
          type="email"
          name="entry.257086240"
          placeholder="Voer je e-mailadres in"
          required
          className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-teal-300 bg-white 
                     text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 
                     text-white font-semibold transition duration-300"
        >
          Inschrijven
        </button>
      </form>

      {submitted && (
        <p className="text-teal-600 text-center mt-4 animate-fadeIn">
          ✅ Bedankt voor je inschrijving!
        </p>
      )}
    </div>
  );
}

export default NewsletterForm;
