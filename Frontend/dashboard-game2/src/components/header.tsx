import { Star, Heart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 p-4 rounded-t-2xl">
      <div className="flex items-center justify-between">
        {/* Left section with title and progress */}
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-white text-2xl font-bold">Village</h1>
            <h1 className="text-white text-2xl font-bold">Science</h1>
            <h1 className="text-white text-2xl font-bold">Detective</h1>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-blue-200 text-sm">SCIENCE LEVEL 3</span>
              <Progress value={60} className="w-32 h-2 bg-blue-900" />
              <span className="text-white font-medium">1250 XP</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-200 text-sm">MATH LEVEL 5</span>
              <Progress value={40} className="w-32 h-2 bg-blue-900" />
            </div>
          </div>
        </div>

        {/* Center section with badges */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mb-1">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                🔬
              </div>
            </div>
            <span className="text-blue-200 text-xs">BADGES</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-1">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                ⚙️
              </div>
            </div>
            <span className="text-blue-200 text-xs">BIOLOGY EXPERT</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center mb-1">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                💧
              </div>
            </div>
            <span className="text-blue-200 text-xs">ENDRINOLOGY HERO</span>
          </div>
        </div>

        {/* Right section with user info */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Star className="text-yellow-400 w-5 h-5 fill-current" />
            <span className="text-white font-medium">1250 XP</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-blue-200 text-xs">OFFLINE</span>
            <span className="text-blue-200 text-xs">MODE</span>
            <span className="text-blue-200 text-xs">SOMETHING</span>
          </div>
          
          <Avatar className="w-12 h-12 border-2 border-blue-400">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
            <AvatarFallback>👦</AvatarFallback>
          </Avatar>
          
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
            <Heart className="text-red-500 w-6 h-6 fill-current" />
          </div>
        </div>
      </div>
    </div>
  );
}