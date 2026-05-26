export default function ContactMap() {
  // Remplacez cette URL par le lien Google Maps de vos locaux
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.319968231797!2d11.502!3d3.848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfc6f7e0c8b9%3A0x8b7e5a1f6c9d3e2f!2sBastos%2C%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1234567890123!5m2!1sfr!2scm"

  return (
    <section className="container-custom py-8">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={googleMapsUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Plan d'accès IBAIEAUTY Cameroun"
        ></iframe>
      </div>
    </section>
  )
}