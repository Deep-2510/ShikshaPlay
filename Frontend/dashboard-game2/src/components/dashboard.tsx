import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

export function Dashboard() {
  return (
    <div className="flex-1 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 p-6">
      <div className="grid grid-cols-2 gap-6 h-full">
        {/* MY PROGRESS */}
        <Card className="bg-blue-100 border-2 border-blue-400 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-blue-600 text-center">MY PROGRESS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Circular Progress */}
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#d1d5db"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#22c55e"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={251.2}
                    strokeDashoffset={50.24}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-blue-900 font-bold text-lg">4580 / 5000 XP</span>
                </div>
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-blue-900 font-medium">DAILY LEARNING</div>
              <div className="text-blue-900 font-bold text-xl">12 DAYS!</div>
              
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">+200 XP BONUS</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">+200 XP WEEKS!</span>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-blue-900 text-sm">SCIENCE XP</span>
                  <span className="text-blue-700 text-sm">2100 / 2500</span>
                </div>
                <Progress value={84} className="h-2 bg-blue-200" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-blue-900 text-sm">MEXINEXLETE</span>
                  <span className="text-blue-700 text-sm">1480 / 2500</span>
                </div>
                <Progress value={59} className="h-2 bg-blue-200" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ACHIEVEMENT BADGES */}
        <Card className="bg-blue-100 border-2 border-blue-400 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-blue-600 text-center">ACHIEVEMENT BADGES</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Badge Grid */}
            <div className="grid grid-cols-6 gap-3 mb-6">
              {/* Row 1 */}
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🔬</span>
              </div>
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🧪</span>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⚗️</span>
              </div>
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">❗</span>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">💰</span>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✏️</span>
              </div>

              {/* Row 2 */}
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🔧</span>
              </div>
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⭐</span>
              </div>
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">📊</span>
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🎯</span>
              </div>
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">📈</span>
              </div>
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⚙️</span>
              </div>

              {/* Row 3 */}
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🔬</span>
              </div>
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">💻</span>
              </div>
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">💡</span>
              </div>
              <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🏆</span>
              </div>
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">💚</span>
              </div>
              <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🛡️</span>
              </div>

              {/* Row 4 */}
              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⚗️</span>
              </div>
              <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🛡️</span>
              </div>
            </div>

            <div className="text-center text-blue-900 font-medium">
              27 / 50 Badges Collected
            </div>
          </CardContent>
        </Card>

        {/* LEARNING PATH */}
        <Card className="bg-blue-100 border-2 border-blue-400 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-blue-600 text-center">LEARNING PATH</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-4 mb-4">
              <h3 className="text-blue-900 font-medium mb-3">SUGGESTED FOR YOU</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👦</span>
                  </div>
                  <span className="flex-1 text-blue-900 text-sm">CROP PESTS & Problem Solved</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <span className="flex-1 text-blue-900 text-sm">CROP PESTS & Solution Solved</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👩</span>
                  </div>
                  <span className="flex-1 text-blue-900 text-sm">LERENNA PETCHUDIAM Solved</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <span className="flex-1 text-blue-900 text-sm">VILLAGE FHENS-ODWT METONDS Solved</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PERFORMANCE ANALYTICS */}
        <Card className="bg-blue-100 border-2 border-blue-400 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-blue-600 text-center">PERFORMANCE ANALYTICS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-4 space-y-4">
              <h3 className="text-blue-900 font-medium">Biology</h3>
              
              {/* Bar Chart */}
              <div className="flex items-end gap-4 h-32">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-16 bg-blue-500 rounded-t"></div>
                  <span className="text-xs text-blue-900">Biology</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-orange-500 rounded-t"></div>
                  <span className="text-xs text-blue-900">Physics</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-24 bg-gray-600 rounded-t"></div>
                  <span className="text-xs text-blue-900">Math</span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-blue-900">
                <div>• <strong>Strongest Subject:</strong> Math</div>
                <div>• <strong>Needs Practice</strong> (Ehecticy)</div>
                <div><strong>Accuracy: 85% (Overall)</strong></div>
              </div>

              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                VIEW FULL REPORT
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}