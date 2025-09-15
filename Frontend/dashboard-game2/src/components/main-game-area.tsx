import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MainGameArea() {
  return (
    <div className="flex-1 relative">
      {/* Daily Streak Banner */}
      <div className="absolute top-4 left-4 z-10">
        <Card className="bg-amber-600 border-0">
          <CardContent className="p-2 px-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <span className="text-white font-medium">Daily Streak: 7 Days!</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Village Scene */}
      <div className="relative h-full bg-gradient-to-b from-orange-200 via-yellow-200 to-green-200">
        {/* Background village illustration */}
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1542365775-6e6177a8e296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwbGFuZHNjYXBlJTIwZmFybWluZyUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTc5MTE4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Village landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        {/* Challenge Markers */}
        <div className="absolute top-16 left-16">
          <Card className="bg-amber-800 border-0">
            <CardContent className="p-2 px-3">
              <span className="text-amber-100 text-sm">CROP BLIGHT MYSTERY</span>
            </CardContent>
          </Card>
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mt-2 mx-auto border-2 border-white">
            <span className="text-white">📍</span>
          </div>
        </div>

        <div className="absolute top-16 right-32">
          <Card className="bg-amber-800 border-0">
            <CardContent className="p-2 px-3">
              <span className="text-amber-100 text-sm">MISSING POWER PROBLEM</span>
            </CardContent>
          </Card>
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mt-2 mx-auto border-2 border-white">
            <span className="text-white">📍</span>
          </div>
        </div>

        <div className="absolute bottom-32 left-20">
          <Card className="bg-amber-800 border-0">
            <CardContent className="p-2 px-3">
              <span className="text-amber-100 text-sm">FOUL WATER SOURCE</span>
            </CardContent>
          </Card>
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mt-2 mx-auto border-2 border-white">
            <span className="text-white">📍</span>
          </div>
        </div>

        {/* Main Challenge Card */}
        <div className="absolute bottom-24 right-32">
          <Card className="bg-amber-800 border-0 w-64">
            <CardContent className="p-4">
              <h3 className="text-yellow-400 font-bold mb-2">गाय का स्वास्थ्य:</h3>
              <h3 className="text-yellow-400 font-bold mb-2">फसल रोग MYSTERY</h3>
              <p className="text-amber-200 text-sm mb-3">Investigate the falling wheat fields</p>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-2">
                START CHALLENGE
              </Button>
              <Button variant="outline" className="w-full bg-amber-600 hover:bg-amber-700 text-white border-amber-500">
                TEAM UP
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Character Illustrations */}
        <div className="absolute bottom-8 left-20">
          <div className="w-24 h-32 bg-amber-600 rounded-lg flex items-end justify-center p-2">
            <div className="text-4xl">👦</div>
          </div>
        </div>

        <div className="absolute bottom-8 left-52">
          <div className="w-24 h-32 bg-purple-600 rounded-lg flex items-end justify-center p-2">
            <div className="text-4xl">👧</div>
          </div>
        </div>

        {/* Tools at bottom */}
        <div className="absolute bottom-4 left-80 flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔬</span>
            </div>
            <span className="text-xs text-amber-800 mt-1">Virtual Microscope</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🧪</span>
            </div>
            <span className="text-xs text-amber-800 mt-1">pH Meter</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <span className="text-xs text-amber-800 mt-1">Data Analysis</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📏</span>
            </div>
            <span className="text-xs text-amber-800 mt-1">pH Meter</span>
          </div>
        </div>

        {/* Settings button */}
        <div className="absolute bottom-4 left-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-xl">⚙️</span>
          </div>
        </div>
      </div>
    </div>
  );
}