import "../styles/welcome.css"

type InfoCardProps = {
    title: string;
    description: string;
    buttonText: string;
    icon?: React.ReactNode;
}

export function InfoCard({title, description, buttonText, icon}: InfoCardProps)
{
    return(
    <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition text-center font-serif text-[#4a4a4a] max-w-50">
      <div className="flex justify-center mb-3 text-3xl">{icon}</div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
      <button className="border-1 translateY hover:shadow-[0_5px_10px_rgba(0,0,0,0.2)] #000000] rounded-md  border-gray-300 mt-4 p-1">Mehr erfahren</button>
    </div>
    )
}