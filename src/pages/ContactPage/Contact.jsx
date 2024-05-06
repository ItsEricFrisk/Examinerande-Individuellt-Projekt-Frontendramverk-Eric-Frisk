import "./Contact.scss";

export default function Contact() {
  function sendEmail() {
    window.location.href = "mailto:test@test.test";
  }

  return (
    <section className="contact">
      <button className="contact__mail-btn" onClick={sendEmail}>
        Contact me
      </button>
    </section>
  );
}
