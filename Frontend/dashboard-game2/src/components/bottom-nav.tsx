import { Home, Target, Wrench, Users, User } from "lucide-react";

export function BottomNav() {
  return (
    <div className="bg-blue-900 p-3 rounded-b-2xl">
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-1 group-hover:bg-blue-800 transition-colors">
            <Home className="w-6 h-6 text-blue-200" />
          </div>
          <span className="text-blue-200 text-xs">HOME</span>
        </div>

        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-1 group-hover:bg-blue-800 transition-colors">
            <Target className="w-6 h-6 text-blue-200" />
          </div>
          <span className="text-blue-200 text-xs">MISSIONS</span>
        </div>

        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-1 group-hover:bg-blue-800 transition-colors">
            <Wrench className="w-6 h-6 text-blue-200" />
          </div>
          <span className="text-blue-200 text-xs">MISSIONS</span>
        </div>

        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-1">
            <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
              <span className="text-blue-900 text-sm font-bold">LAB</span>
            </div>
          </div>
          <span className="text-blue-200 text-xs">LAB</span>
        </div>

        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-1 group-hover:bg-blue-800 transition-colors">
            <Users className="w-6 h-6 text-blue-200" />
          </div>
          <span className="text-blue-200 text-xs">SOCIAL</span>
        </div>

        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-1 group-hover:bg-blue-800 transition-colors">
            <Users className="w-6 h-6 text-blue-200" />
          </div>
          <span className="text-blue-200 text-xs">SOCIAL</span>
        </div>

        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-1 group-hover:bg-blue-800 transition-colors">
            <User className="w-6 h-6 text-blue-200" />
          </div>
          <span className="text-blue-200 text-xs">PROFILE</span>
        </div>
      </div>
    </div>
  );
}