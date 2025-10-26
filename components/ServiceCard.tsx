interface ServiceCardProps {
  service: any;
  animationDelay?: number;
}

export default function ServiceCard({ service, animationDelay = 0 }: ServiceCardProps) {
  return (
    <div
      className="relative p-1 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-400"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:translate-y-[-4px] hover:shadow-2xl transition-transform duration-300 animate-fade-in">
        <span className="text-4xl mb-4">{service.icon || '🌱'}</span>
        <h3 className="text-xl font-semibold mb-2 text-green-800">{service.title}</h3>
        <p className="text-gray-600 text-center">{service.description || service.desc}</p>
      </div>
    </div>
  )
}
