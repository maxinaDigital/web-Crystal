import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes — Clínica Crystal | Aguascalientes",
  description:
    "Resolvemos tus dudas sobre citas, servicios, horarios y atención en Clínica Crystal, clínica privada 24/7 en Aguascalientes.",
};

const FAQS = [
  {
    catKey: "cat1",
    items: [
      { q: "¿Necesito cita previa para ser atendido?", a: "Para consultas programadas con especialistas sí recomendamos agendar cita. Para urgencias atendemos de inmediato las 24 horas, los 365 días del año, sin necesidad de cita previa." },
      { q: "¿Cómo puedo agendar una cita?", a: "Puedes agendar por WhatsApp, llamando al (449) 000-0000, o usando el formulario en nuestra página de Citas. Confirmamos disponibilidad en minutos." },
      { q: "¿Cuánto tiempo dura una consulta?", a: "Una consulta estándar dura entre 20 y 30 minutos. Las consultas de primera vez o con estudios pueden extenderse más." },
      { q: "¿Puedo cancelar o cambiar mi cita?", a: "Sí. Te pedimos avisarnos con al menos 2 horas de anticipación para poder asignar el espacio a otro paciente." },
    ],
  },
  {
    catKey: "cat2",
    items: [
      { q: "¿Cuál es el horario de la clínica?", a: "Clínica Crystal está abierta las 24 horas del día, los 7 días de la semana, los 365 días del año. Urgencias siempre disponibles." },
      { q: "¿Tienen estacionamiento?", a: "Sí, contamos con estacionamiento propio para pacientes y visitantes sin costo adicional." },
      { q: "¿Tienen cafetería?", a: "Sí, contamos con cafetería y salas de estar en todos los niveles del edificio para mayor comodidad de pacientes y familiares." },
      { q: "¿Dónde están ubicados?", a: "Av. del Parque #348, Col. Jardines del Parque, CP 20276, Aguascalientes, Ags. Entre Av. del Lago y Av. Héroe de Nacozari." },
    ],
  },
  {
    catKey: "cat3",
    items: [
      { q: "¿Qué especialidades tienen disponibles?", a: "Contamos con Medicina General, Pediatría y Neonatología, Ginecología y Obstetricia, Cardiología, Cirugía General, Nutrición Clínica, Laboratorio Clínico e Imagenología." },
      { q: "¿Tienen laboratorio propio?", a: "Sí. Nuestro laboratorio clínico propio entrega resultados el mismo día en la mayoría de los estudios, sin necesidad de referirte a otra unidad." },
      { q: "¿Qué estudios de imagen realizan?", a: "Contamos con ultrasonido y rayos X. Los estudios se realizan e interpretan en la misma clínica." },
      { q: "¿Atienden partos y cesáreas?", a: "Sí. Contamos con 3 quirófanos exclusivos de maternidad y neonatólogos de guardia 24/7 para atender partos, cesáreas y recién nacidos de riesgo." },
    ],
  },
  {
    catKey: "cat4",
    items: [
      { q: "¿Aceptan seguros médicos?", a: "Actualmente atendemos principalmente a pacientes particulares. Contáctanos para verificar si tu aseguradora tiene convenio vigente con nosotros." },
      { q: "¿Cuáles son sus formas de pago?", a: "Aceptamos efectivo, tarjetas de débito y crédito. El costo de consulta y estudios se informa al momento de agendar." },
      { q: "¿Emiten facturas?", a: "Sí. Emitimos CFDI con nuestro RFC: CCR220517JW8. Solicítala al momento de pagar." },
    ],
  },
];

export default async function PreguntasFrecuentesPage() {
  const t = await getTranslations("faqPage");

  return (
    <main className="pt-16 md:pt-[calc(2rem+4rem)]">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#0a4a5a] to-[#1a9090]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-primary-light text-sm font-semibold uppercase tracking-widest mb-4">
            {t("eyebrow")}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {t("title")}{" "}
            <span className="text-[#7ae8e8]">{t("titleAccent")}</span>
          </h1>
          <p className="text-white/75 text-lg">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-3xl mx-auto px-4 space-y-14">
          {FAQS.map((group) => (
            <div key={group.catKey}>
              <h2 className="font-heading text-2xl font-bold text-brand-text mb-6 pb-3 border-b border-brand-border">
                {t(group.catKey as "cat1" | "cat2" | "cat3" | "cat4")}
              </h2>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <details
                    key={item.q}
                    className="group bg-white border border-brand-border rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-medium text-brand-text list-none">
                      {item.q}
                      <span className="w-5 h-5 rounded-full bg-primary-light text-primary flex items-center justify-center flex-shrink-0 text-lg leading-none group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="px-5 pb-5 text-brand-muted leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary-light">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-brand-text mb-3">
            {t("ctaTitle")}
          </h2>
          <p className="text-brand-muted mb-6">
            {t("ctaDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
            >
              {t("ctaContact")}
            </Link>
            <Link
              href="/citas"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors"
            >
              {t("ctaBook")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
