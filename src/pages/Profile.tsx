import { User, Shield, Bell, Globe, Camera } from 'lucide-react'
import { Card, Button, Input } from '../components/UI'

export function Profile() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto pb-12">
      <header>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Profile Settings</h1>
        <p className="text-slate-500 font-medium text-lg">Manage your personal information and preferences.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12">
        <aside className="space-y-6">
          <div className="relative group w-32 h-32 mx-auto md:mx-0">
            <div className="w-full h-full rounded-3xl bg-blue-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl shadow-blue-500/10 transition-all duration-500 group-hover:scale-105">
              <User className="w-16 h-16 text-blue-600" />
            </div>
            <button className="absolute bottom-[-8px] right-[-8px] p-2.5 bg-slate-900 rounded-2xl shadow-lg text-white hover:bg-blue-600 transition-colors border-4 border-slate-50">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-black text-slate-900">Alex Rivera</h2>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Product Designer</p>
          </div>
        </aside>

        <div className="space-y-8">
          <Card className="p-8 md:p-10 rounded-3xl border-slate-200 shadow-sm">
            <h3 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-xl">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <Input label="Full Name" defaultValue="Alex Rivera" />
              <Input label="Email Address" defaultValue="alex@rivera.design" />
              <Input label="Job Title" defaultValue="Product Designer" />
              <Input label="Location" defaultValue="San Francisco, CA" />
            </div>
            <div className="mt-10 pt-8 border-t border-slate-100 flex justify-end">
              <Button className="rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-8">Save Changes</Button>
            </div>
          </Card>

          <Card className="p-8 md:p-10 rounded-3xl border-slate-200 shadow-sm">
            <h3 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-xl">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              Security & Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-100 group-hover:border-blue-100"><Bell className="w-5 h-5 text-slate-600" /></div>
                  <div>
                    <p className="font-black text-slate-900 text-sm">Email Notifications</p>
                    <p className="text-xs text-slate-500 font-medium">Receive updates about project payments</p>
                  </div>
                </div>
                <div className="w-11 h-6 bg-blue-600 rounded-full relative p-1 cursor-pointer">
                  <div className="absolute right-1 top-1 bottom-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-100 group-hover:border-blue-100"><Globe className="w-5 h-5 text-slate-600" /></div>
                  <div>
                    <p className="font-black text-slate-900 text-sm">Public Portfolio</p>
                    <p className="text-xs text-slate-500 font-medium">Showcase your completed projects</p>
                  </div>
                </div>
                <div className="w-11 h-6 bg-slate-200 rounded-full relative p-1 cursor-pointer">
                  <div className="absolute left-1 top-1 bottom-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}