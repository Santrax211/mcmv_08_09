"use client"

import { useState, useMemo } from "react"
import { Heart, Calendar, Sun, Moon, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"
import Image from "next/image"

// Datos de ejemplo - reemplaza con tus fotos y mensajes reales
const memories = [
  {
    id: 1,
    image: "/images/recuerdos/2025-07-21.jpeg",
    message:
      "Este fue nuestro primer selfie juntos. Desde ese momento supe que eras especial. Tu sonrisa ilumina mis días. ❤️",
    date: new Date("2025-07-21"),
    location: "Parque Central",
  },
  {
    id: 2,
    image: "/images/recuerdos/2025-07-21.jpeg",
    message:
      "Nuestra primera cena juntos. Hablamos por horas y el tiempo se detuvo. Cada momento contigo es mágico. ✨",
    date: new Date("2024-02-14"),
    location: "Restaurante Favorito",
  },
  {
    id: 3,
    image: "/images/recuerdos/2025-07-21.jpeg",
    message:
      "Viendo el atardecer juntos en la playa. Tus ojos brillaban más que las estrellas. Eres mi sol y mi luna. 🌅",
    date: new Date("2024-03-20"),
    location: "Playa del Sol",
  },
  {
    id: 4,
    image: "/images/recuerdos/2025-07-21.jpeg",
    message: "Nuestras tardes de café se volvieron mi adicción favorita. Tu risa es la melodía más hermosa. ☕",
    date: new Date("2024-04-10"),
    location: "Café Luna",
  },
  {
    id: 5,
    image: "/images/recuerdos/2025-07-21.jpeg",
    message: "Picnic en el parque. Compartimos sueños y risas bajo el cielo azul. Contigo todo es perfecto. 🌸",
    date: new Date("2024-05-05"),
    location: "Parque de los Sueños",
  },
  {
    id: 6,
    image: "/images/recuerdos/2025-07-21.jpeg",
    message: "Noche de películas en casa. Abrazados en el sofá, el mundo exterior desapareció. Eres mi hogar. 🏠",
    date: new Date("2024-06-18"),
    location: "Casa",
  },
  {
    id: 7,
    image: "/images/recuerdos/2025-07-21.jpeg",
    message: "Nuestra aventura en la montaña. Conquistamos la cima juntos, como conquistaste mi corazón. 🏔️",
    date: new Date("2024-07-12"),
    location: "Montaña Esperanza",
  },
  {
    id: 8,
    image: "/images/recuerdos/2025-07-21.jpeg",
    message: "Tu cumpleaños anterior. Ver tu felicidad es mi mayor regalo. Hoy celebramos otro año de tu luz. 🎂",
    date: new Date("2023-09-08"),
    location: "Celebración",
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
                Nuestros Momentos Especiales
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Una colección de recuerdos para celebrar tu día especial ✨
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
                      <SelectItem key={year} value={year.toString()}>
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
