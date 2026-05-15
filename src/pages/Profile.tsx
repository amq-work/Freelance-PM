import React from 'react'
import { User, Mail, Shield, Bell, Globe, Camera } from 'lucide-react'
import { Card, Button, Input } from '../components/UI'

export function Profile() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <header>
        <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight mb-2">Profile Settings</h1>
        <p className="text-[#64748B] font-medium">Manage your personal information and preferences.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12">
        <aside className="space-y-4">
          <div className="relative group w-32 h-32 mx-auto md:mx-0">
            <div className="w-full h-full rounded-3xl bg-blue-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-sm">
              <User className="w-16 h-16 text-blue-600" />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-white rounded-xl shadow-md border border-slate-100 text-slate-600 hover:text-blue-600 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-slate-900">Alex Rivera</h2>
            <p className="text-sm text-slate-500 font-medium">Freelance Product Designer</p>
          </div>
        </aside>

        <div className="space-y-8">
          <Card className="p-10">
            <h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input label="Full Name" defaultValue="Alex Rivera" />
              <Input label="Email Address" defaultValue="alex@rivera.design" />
              <Input label="Job Title" defaultValue="Product Designer" />
              <Input label="Location" defaultValue="San Francisco, CA" />
            </div>
            <div className="mt-10 pt-8 border-t border-slate-100 flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </Card>

          <Card className="p-10">
            <h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Security & Preferences
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm"><Bell className="w-5 h-5 text-slate-600" /></div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Email Notifications</p>
                    <p className="text-xs text-slate-500">Receive updates about project payments</p>
                  </div>
                </div>
                <div className="w-10 h-5 bg-blue-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm"><Globe className="w-5 h-5 text-slate-600" /></div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Public Portfolio</p>
                    <p className="text-xs text-slate-500">Showcase your completed projects</p>
                  </div>
                </div>
                <div className="w-10 h-5 bg-slate-200 rounded-full relative">
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}