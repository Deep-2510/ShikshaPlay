import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function Sidebar() {
  return (
    <div className="w-80 bg-amber-900 p-4 space-y-4">
      {/* Class Leaderboard */}
      <Card className="bg-amber-100 border-0">
        <CardContent className="p-4">
          <h3 className="font-bold text-amber-900 mb-3 text-center">CLASS LEADERBOARD</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-1">
              <span className="text-amber-900">Rohan S.</span>
              <span className="text-amber-700">1st</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-amber-900">Priya K. 2</span>
              <span className="text-amber-700">2nd</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-amber-900">Priya K.</span>
              <span className="text-amber-700">3</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-amber-900">Amit M. 3</span>
              <span className="text-amber-700">759</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="space-y-2">
        <Card className="bg-amber-100 border-0 py-2">
          <CardContent className="p-2 text-center">
            <span className="text-amber-900 font-medium">20009</span>
          </CardContent>
        </Card>
        <Card className="bg-amber-100 border-0 py-2">
          <CardContent className="p-2 text-center">
            <span className="text-amber-900 font-medium">43,5000K</span>
          </CardContent>
        </Card>
        <Card className="bg-amber-100 border-0 py-2">
          <CardContent className="p-2 text-center">
            <span className="text-amber-900 font-medium">43,5000K</span>
          </CardContent>
        </Card>
      </div>

      {/* Team Challenges */}
      <div>
        <h3 className="text-amber-200 font-bold mb-3 text-center">TEAM CHALLENGES</h3>
        <Card className="bg-amber-800 border-0">
          <CardContent className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">!</span>
              </div>
              <span className="text-amber-100 text-sm">SOLVE THE PUMP PROBLEM -</span>
            </div>
            <span className="text-amber-300 text-sm">Team B, 65% Complete</span>
          </CardContent>
        </Card>
      </div>

      {/* Peer Teaching */}
      <div>
        <h3 className="text-amber-200 font-bold mb-3 text-center">PEER TEACHING</h3>
        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
          Create a Question
        </Button>
      </div>
    </div>
  );
}