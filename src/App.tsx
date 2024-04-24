import { useState } from 'react'

import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

function App() {
  const [techoAncho, setTechoAncho] = useState(0)
  const [techoAlto, setTechoAlto] = useState(0)
  const [panelAncho, setPanelAncho] = useState(0)
  const [panelAlto, setPanelAlto] = useState(0)
  const [cantidadPaneles, setCantidadPaneles] = useState(0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // por generar
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="mx-auto max-w-3xl space-y-6 py-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Calculadora de Paneles Solares</h1>
          <p className="text-slate-500">
            Calcule la cantidad máxima de paneles solares que caben en su techo.
          </p>
        </div>
        <div>{techoAncho}</div>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label
              className="block text-sm font-medium leading-5"
              htmlFor="dimensiones"
            >
              Dimensiones del Techo
            </label>
            <div className="flex gap-2">
              <Input
                className="w-1/2"
                id="dimensiones"
                min={0}
                placeholder="Ancho"
                step="0.1"
                type="number"
                onChange={(e) => {
                  if (e.target.valueAsNumber >= 0) {
                    setTechoAncho(e.target.valueAsNumber)
                  } else {
                    setTechoAncho(0)
                  }
                }}
              />
              <Input
                className="w-1/2"
                id="dimensiones"
                min={0}
                placeholder="Alto"
                step="0.1"
                type="number"
                onChange={(e) => {
                  if (e.target.valueAsNumber >= 0) {
                    setTechoAlto(e.target.valueAsNumber)
                  } else {
                    setTechoAlto(0)
                  }
                }}
              />
            </div>
          </div>
          <div className="grid gap-1">
            <label
              className="block text-sm font-medium leading-5"
              htmlFor="paneles"
            >
              Dimensiones del Panel Solar
            </label>
            <div className="flex gap-2">
              <Input
                className="w-1/2"
                id="paneles"
                min={0}
                placeholder="Ancho"
                step="0.1"
                type="number"
                onChange={(e) => {
                  if (e.target.valueAsNumber >= 0) {
                    setPanelAncho(e.target.valueAsNumber)
                  } else {
                    setPanelAncho(0)
                  }
                }}
              />
              <Input
                className="w-1/2"
                id="paneles"
                min={0}
                placeholder="Alto"
                step="0.1"
                type="number"
                onChange={(e) => {
                  if (e.target.valueAsNumber >= 0) {
                    setPanelAlto(e.target.valueAsNumber)
                  } else {
                    setPanelAlto(0)
                  }
                }}
              />
            </div>
          </div>
          <Button type="submit" size="lg">
            Calcular
          </Button>
        </form>
        <div className="grid gap-4">
          <div className="flex items-center space-x-4">
            <div className="grid gap-1">
              <h2 className="text-lg font-semibold">Disposición de Paneles:</h2>
              {cantidadPaneles >= 0 && (
                <p className="text-lg text-slate-500">
                  Se pueden instalar <strong>{cantidadPaneles}</strong> paneles
                  solares.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
