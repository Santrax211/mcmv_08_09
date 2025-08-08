"use client"

import { useState, useMemo } from "react"
import { Heart, Calendar, Sun, Moon, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"
import Image from "next/image"

const memories = [
  {
    id: 1,
    image: "/images/recuerdos/2025-05-17.jpeg",
    message:
      "Recuerdo que este día tu viniste a Villa para hacer hora, estuvimos hablando y contándonos muchas cosas. Tomando el Lit y habíamos calentado el chaufa que había traído xd.",
    date: new Date("2025-05-18"),
    location: "VES",
  },
  {
    id: 2,
    image: "/images/recuerdos/2025-05-17 (2).jpeg",
    message:
      "Después de hablar y chismosear, regresamos en tren. La neblina estaba terrible ese día.",
    date: new Date("2025-05-18"),
    location: "VES",
  },
  {
    id: 3,
    image: "/images/recuerdos/2025-05-27.jpeg",
    message:
      "Este fue la primera salida que tuvimos al cine con Estefania. Me acuerdo que te asustó las muertes de la película Destino Final: Lazos de Sangre. Me encantó estar a tu lado y tomarte la mano ❤️",
    date: new Date("2025-05-28"),
    location: "Mall Aventura SJL",
  },
  {
    id: 4,
    image: "/images/recuerdos/2025-06-20.jpeg",
    message:
      "Me acuerdo que ese día estaba lloviendo fuerte, y entramos a probar la nueva cafetería. La comida no estuvo mala, pero con tu compañía fue lo mejor ✨",
    date: new Date("2025-06-21"),
    location: "Cafetería nueva en Villa El Salvador",
  },
  {
    id: 5,
    image: "/images/recuerdos/2025-06-24.jpeg",
    message:
      "Recuerdo que este día fui con Estefania a verte, y me sorprendió que habías tomado algo de vino con four loko",
    date: new Date("2025-06-25"),
    location: "San Juan de Lurigancho",
  },
  {
    id: 6,
    image: "/images/recuerdos/2025-06-24(2).jpeg",
    message: "Este día te tomé varias fotos y hasta videos que tenemos en nuestro grupo de WhatsApp 🌟",
    date: new Date("2025-06-25"),
    location: "San Juan de Lurigancho",
  },
  {
    id: 7,
    image: "/images/recuerdos/2025-06-24(3).jpeg",
    message: "Me acuerdo que cuando llegué me diste un abrazo y ahi sentí el olor a vino, te dije sopla y si era lo que pensé. Te vi feliz y ese abrazo me hizo sentir especial.",
    date: new Date("2025-06-25"),
    location: "San Juan de Lurigancho",
  },
  {
    id: 8,
    image: "/images/recuerdos/2025-06-25.jpeg",
    message: "Me acuerdo que ese día estabas buscando un casco blanco para poder ir, y la verdad me gustó como te esfuerzas por conseguir lo que quieres. Ese día fue especial porque te vi feliz con tus amigas.",
    date: new Date("2025-06-26"),
    location: "Ingeniería Ambiental",
  },
  {
    id: 9,
    image: "/images/recuerdos/2025-06-26.jpeg",
    message: "Este día fue uno de los primeros días que comenzamos a salir juntos y como no tomamos tren, tocó irnos en taxi. Tu compañía me hizo sentir cómodo y feliz, y me acuerdo que tenías sueño y te dormías en mi hombro.",
    date: new Date("2025-06-27"),
    location: "Regreso a casa",
  },
  {
    id: 10,
    image: "/images/recuerdos/2025-06-26 (2).jpeg",
    message: "Ver esa sonrisa en tu rostro es lo más hermoso que puedo ver. Te amo mi amor",
    date: new Date("2025-06-27"),
    location: "Regreso a casa",
  },
  {
    id: 11,
    image: "/images/recuerdos/2025-06-26 (3).jpeg",
    message: "Te quedaste dormida en mi regazo, y amé ese momento. Me encanta verte dormir, y me encanta que estés a mi lado. Tomar tu mano me hizo sentir seguro.",
    date: new Date("2025-06-27"),
    location: "Regreso a casa",
  },
  {
    id: 12,
    image: "/images/recuerdos/2025-06-27.jpeg",
    message: "Este día te recogí desde Bayóvar para irnos juntos a la universidad. Me acuerdo que compraste Ole Ole y lo comiste conmigo xd mientras jugaba clash.",
    date: new Date("2025-06-28"),
    location: "SJL -VES",
  },
  {
    id: 13,
    image: "/images/recuerdos/2025-06-27 (2).jpeg",
    message: "Me dijiste que ya te querías ir de esa clase, recuerdo que estaba en el gym en ese momento. Me animó ver tu foto, entrené con más energía xd",
    date: new Date("2025-06-28"),
    location: "SJL -VES",
  },
  {
    id: 14,
    image: "/images/recuerdos/2025-06-27 (3).jpeg",
    message: "Me encanta que estes a mi lado, y tomarnos fotos es algo que me gusta hacer para tener recuerdos de esos momentos que paso contigo.",
    date: new Date("2025-06-28"),
    location: "SJL -VES",
  },
  {
    id: 15,
    image: "/images/recuerdos/2025-06-28.jpeg",
    message: "",
    date: new Date("2025-06-29"),
    location: "Parque de El Agustino",
  },
  {
    id: 16,
    image: "/images/recuerdos/2025-06-28 (2).jpeg",
    message: "",
    date: new Date("2025-06-29"),
    location: "Parque de El Agustino",
  },
  {
    id: 17,
    image: "/images/recuerdos/2025-06-28 (3).jpeg",
    message: "",
    date: new Date("2025-06-29"),
    location: "Parque de El Agustino",
  },
  {
    id: 18,
    image: "/images/recuerdos/2025-06-28 (4).jpeg",
    message: "",
    date: new Date("2025-06-29"),
    location: "Parque de El Agustino",
  },
  {
    id: 19,
    image: "/images/recuerdos/2025-06-28 (5).jpeg",
    message: "",
    date: new Date("2025-06-29"),
    location: "Parque de El Agustino",
  },
  {
    id: 20,
    image: "/images/recuerdos/2025-06-28 (6).jpeg",
    message: "",
    date: new Date("2025-06-29"),
    location: "Parque de El Agustino",
  },
  {
    id: 21,
    image: "/images/recuerdos/2025-06-29.jpeg",
    message: "",
    date: new Date("2025-06-30"),
    location: "Juego del Calamar",
  },
  {
    id: 22,
    image: "/images/recuerdos/2025-06-30.jpeg",
    message: "",
    date: new Date("2025-07-01"),
    location: "",
  },
  {
    id: 23,
    image: "/images/recuerdos/2025-06-30 (2).jpeg",
    message: "",
    date: new Date("2025-07-01"),
    location: "",
  },
  {
    id: 24,
    image: "/images/recuerdos/2025-06-30 (3).jpeg",
    message: "",
    date: new Date("2025-07-01"),
    location: "",
  },
  {
    id: 25,
    image: "/images/recuerdos/2025-07-01.jpeg",
    message: "",
    date: new Date("2025-07-02"),
    location: "",
  },
  {
    id: 26,
    image: "/images/recuerdos/2025-07-01 (2).jpeg",
    message: "",
    date: new Date("2025-07-02"),
    location: "",
  },
  {
    id: 27,
    image: "/images/recuerdos/2025-07-01 (3).jpeg",
    message: "",
    date: new Date("2025-07-02"),
    location: "",
  },
  {
    id: 28,
    image: "/images/recuerdos/2025-07-01 (4).jpeg",
    message: "",
    date: new Date("2025-07-02"),
    location: "",
  },
  {
    id: 29,
    image: "/images/recuerdos/2025-07-02.jpeg",
    message: "",
    date: new Date("2025-07-03"),
    location: "",
  },
  {
    id: 30,
    image: "/images/recuerdos/2025-07-02 (2).jpeg",
    message: "",
    date: new Date("2025-07-03"),
    location: "",
  },
  {
    id: 31,
    image: "/images/recuerdos/2025-07-03.jpeg",
    message: "",
    date: new Date("2025-07-04"),
    location: "",
  },
  {
    id: 32,
    image: "/images/recuerdos/2025-07-05.jpeg",
    message: "",
    date: new Date("2025-07-06"),
    location: "",
  },
  {
    id: 33,
    image: "/images/recuerdos/2025-07-08.jpeg",
    message: "",
    date: new Date("2025-07-09"),
    location: "",
  },
  {
    id: 34,
    image: "/images/recuerdos/2025-07-08(2).jpeg",
    message: "",
    date: new Date("2025-07-09"),
    location: "",
  },
  {
    id: 35,
    image: "/images/recuerdos/2025-07-09(2).jpeg",
    message: "",
    date: new Date("2025-07-10"),
    location: "",
  },
  {
    id: 36,
    image: "/images/recuerdos/2025-07-09.jpeg",
    message: "",
    date: new Date("2025-07-10"),
    location: "",
  },
  {
    id: 37,
    image: "/images/recuerdos/2025-07-10.jpeg",
    message: "",
    date: new Date("2025-07-11"),
    location: "",
  },
  {
    id: 38,
    image: "/images/recuerdos/2025-07-10(2).jpeg",
    message: "",
    date: new Date("2025-07-11"),
    location: "",
  },
  {
    id: 39,
    image: "/images/recuerdos/2025-07-10(3).jpeg",
    message: "",
    date: new Date("2025-07-11"),
    location: "",
  },
  {
    id: 40,
    image: "/images/recuerdos/2025-07-10(4).jpeg",
    message: "",
    date: new Date("2025-07-11"),
    location: "",
  },
  {
    id: 41,
    image: "/images/recuerdos/2025-07-12.jpeg",
    message: "",
    date: new Date("2025-07-13"),
    location: "",
  },
  {
    id: 42,
    image: "/images/recuerdos/2025-07-12(1).jpeg",
    message: "",
    date: new Date("2025-07-13"),
    location: "",
  },
  {
    id: 43,
    image: "/images/recuerdos/2025-07-14.jpeg",
    message: "",
    date: new Date("2025-07-15"),
    location: "",
  },
  {
    id: 44,
    image: "/images/recuerdos/2025-07-14(2).jpeg",
    message: "",
    date: new Date("2025-07-15"),
    location: "",
  },
  {
    id: 45,
    image: "/images/recuerdos/2025-07-14(3).jpeg",
    message: "",
    date: new Date("2025-07-15"),
    location: "",
  },
  {
    id: 46,
    image: "/images/recuerdos/2025-07-14(4).jpeg",
    message: "",
    date: new Date("2025-07-15"),
    location: "",
  },
  {
    id: 47,
    image: "/images/recuerdos/2025-07-14(5).jpeg",
    message: "",
    date: new Date("2025-07-15"),
    location: "",
  },
  {
    id: 48,
    image: "/images/recuerdos/2025-07-15.jpeg",
    message: "",
    date: new Date("2025-07-16"),
    location: "",
  },
  {
    id: 49,
    image: "/images/recuerdos/2025-07-15(2).jpeg",
    message: "",
    date: new Date("2025-07-16"),
    location: "",
  },
  {
    id: 50,
    image: "/images/recuerdos/2025-07-15(3).jpeg",
    message: "",
    date: new Date("2025-07-16"),
    location: "",
  },
  {
    id: 51,
    image: "/images/recuerdos/2025-07-16.jpeg",
    message: "",
    date: new Date("2025-07-17"),
    location: "",
  },
  {
    id: 52,
    image: "/images/recuerdos/2025-07-17.jpeg",
    message: "",
    date: new Date("2025-07-18"),
    location: "",
  },
  {
    id: 53,
    image: "/images/recuerdos/2025-07-17(2).jpeg",
    message: "",
    date: new Date("2025-07-18"),
    location: "",
  },
  {
    id: 54,
    image: "/images/recuerdos/2025-07-18.jpeg",
    message: "",
    date: new Date("2025-07-19"),
    location: "",
  },
  {
    id: 55,
    image: "/images/recuerdos/2025-07-19.jpeg",
    message: "",
    date: new Date("2025-07-20"),
    location: "",
  },
  {
    id: 56,
    image: "/images/recuerdos/2025-07-20.jpeg",
    message: "",
    date: new Date("2025-07-21"),
    location: "",
  },
  {
    id: 57,
    image: "/images/recuerdos/2025-07-21.jpeg",
    message: "",
    date: new Date("2025-07-22"),
    location: "",
  },
  {
    id: 58,
    image: "/images/recuerdos/2025-07-21 (2).jpeg",
    message: "",
    date: new Date("2025-07-22"),
    location: "",
  },
  {
    id: 59,
    image: "/images/recuerdos/2025-07-21 (3).jpeg",
    message: "",
    date: new Date("2025-07-22"),
    location: "",
  },
  {
    id: 60,
    image: "/images/recuerdos/2025-07-24.jpeg",
    message: "",
    date: new Date("2025-07-25"),
    location: "",
  },
  {
    id: 61,
    image: "/images/recuerdos/2025-07-24(2).jpeg",
    message: "",
    date: new Date("2025-07-25"),
    location: "",
  },
  {
    id: 62,
    image: "/images/recuerdos/2025-07-29.jpeg",
    message: "",
    date: new Date("2025-07-30"),
    location: "",
  },
  {
    id: 63,
    image: "/images/recuerdos/2025-07-29(2).jpeg",
    message: "",
    date: new Date("2025-07-30"),
    location: "",
  },
  {
    id: 64,
    image: "/images/recuerdos/2025-07-31.jpeg",
    message: "",
    date: new Date("2025-08-01"),
    location: "",
  },
  {
    id: 65,
    image: "/images/recuerdos/2025-07-31(2).jpeg",
    message: "",
    date: new Date("2025-08-01"),
    location: "",
  },
  {
    id: 66,
    image: "/images/recuerdos/2025-08-01.jpeg",
    message: "",
    date: new Date("2025-08-02"),
    location: "",
  },
  {
    id: 67,
    image: "/images/recuerdos/2025-08-01(2).jpeg",
    message: "",
    date: new Date("2025-08-02"),
    location: "",
  },
]

interface PhotoCardProps {
  memory: (typeof memories)[0]
  isFlipped: boolean
  onFlip: () => void
}

function PhotoCard({ memory, isFlipped, onFlip }: PhotoCardProps) {
  return (
    <div className="group perspective-1000 h-80">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={onFlip}
      >
        {/* Frente de la tarjeta */}
        <Card className="absolute inset-0 w-full h-full backface-hidden overflow-hidden border-2 border-pink-200 dark:border-pink-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full h-full">
            <Image
              src={memory.image || "/placeholder.svg"}
              alt={`Recuerdo del ${memory.date.toLocaleDateString()}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">{memory.location}</p>
              <p className="text-xs opacity-90">
                {memory.date.toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="absolute top-4 right-4">
              <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
            </div>
          </div>
        </Card>

        {/* Parte trasera de la tarjeta */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 overflow-hidden border-2 border-pink-200 dark:border-pink-800 shadow-lg bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-950 dark:to-rose-900">
          <div className="p-6 h-full flex flex-col justify-center items-center text-center">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500 mb-4" />
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm">{memory.message}</p>
            <div className="mt-4 text-xs text-gray-600 dark:text-gray-400">
              {memory.date.toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default function BirthdayGallery() {
  const { theme, setTheme } = useTheme()
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [selectedMonth, setSelectedMonth] = useState<string>("all")

  const handleCardFlip = (id: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const filteredMemories = useMemo(() => {
    return memories.filter((memory) => {
      const yearMatch = selectedYear === "all" || memory.date.getFullYear().toString() === selectedYear
      const monthMatch = selectedMonth === "all" || (memory.date.getMonth() + 1).toString() === selectedMonth
      return yearMatch && monthMatch
    })
  }, [selectedYear, selectedMonth])

  const availableYears = useMemo(() => {
    const years = Array.from(new Set(memories.map((m) => m.date.getFullYear())))
    return years.sort((a, b) => b - a)
  }, [])

  const months = [
    { value: "1", label: "Enero" },
    { value: "2", label: "Febrero" },
    { value: "3", label: "Marzo" },
    { value: "4", label: "Abril" },
    { value: "5", label: "Mayo" },
    { value: "6", label: "Junio" },
    { value: "7", label: "Julio" },
    { value: "8", label: "Agosto" },
    { value: "9", label: "Septiembre" },
    { value: "10", label: "Octubre" },
    { value: "11", label: "Noviembre" },
    { value: "12", label: "Diciembre" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 transition-colors duration-500">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-pink-200 dark:border-pink-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Feliz Cumpleaños, mi amor 
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Una colección de recuerdos para celebrar tu día especial. Espero sea de tu agrado
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Año" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    {availableYears.map((year) => (
                      <SelectItem key={year } value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="Mes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    {months.map((month) => (
                      <SelectItem key={month.value} value={month.value}>
                        {month.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="border-pink-200 dark:border-pink-800"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Gallery */}
      <main className="container mx-auto px-4 py-8">
        {filteredMemories.length === 0 ? (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300 text-lg">No hay recuerdos para los filtros seleccionados</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMemories.map((memory) => (
              <PhotoCard
                key={memory.id}
                memory={memory}
                isFlipped={flippedCards.has(memory.id)}
                onFlip={() => handleCardFlip(memory.id)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 dark:text-gray-300">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
          <span>Hecho con amor para tu cumpleaños</span>
          <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
        </div>
        <p className="text-sm">8 de Septiembre - Un día especial para una persona especial</p>
      </footer>
    </div>
  )
}
