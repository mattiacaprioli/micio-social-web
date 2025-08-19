'use client';

import { motion } from 'framer-motion';
import { Download, Heart, Users, Camera, Star, Smartphone, QrCode } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center mb-6">
                <Image
                  src="/app-icon.svg"
                  alt="MicioSocial App Icon"
                  width={80}
                  height={80}
                  className="animate-float"
                />
              </div>
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-gradient">
                MicioSocial
              </h1>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Il Social Network per i tuoi Amici Felini
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Condividi momenti speciali, trova nuovi amici pelosi e crea una community di amanti dei gatti.
                L'app che ogni gatto merita! 🐾
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <button className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Scarica per iOS
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Scarica per Android
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>

            {/* App Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative flex justify-center items-center"
            >
              <Image
                src="/cat-hero.svg"
                alt="MicioSocial App Preview"
                width={400}
                height={400}
                className="max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Perché i Gatti Amano MicioSocial
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tutte le funzionalità che servono per creare la community felina perfetta
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="w-8 h-8" />,
                title: "Condividi Momenti",
                description: "Scatta e condividi le foto più belle del tuo micio con filtri speciali per gatti",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Felina",
                description: "Connettiti con altri amanti dei gatti e trova nuovi amici per i tuoi felini",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Sistema di Like",
                description: "Mostra apprezzamento per i contenuti più carini con il nostro sistema di zampe",
                gradient: "from-red-500 to-orange-500"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Profili Personalizzati",
                description: "Crea profili unici per ogni gatto con informazioni, foto e personalità",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Chat Sicura",
                description: "Messaggia in sicurezza con altri proprietari di gatti nella tua zona",
                gradient: "from-green-500 to-teal-500"
              },
              {
                icon: <QrCode className="w-8 h-8" />,
                title: "QR Code Gatto",
                description: "Ogni gatto ha il suo QR code unico per condividere rapidamente il profilo",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Scarica MicioSocial Ora!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Unisciti a migliaia di gatti e proprietari che stanno già vivendo l'esperienza social felina
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                <QrCode className="w-32 h-32 text-gray-400" />
              </div>
              <p className="text-gray-600 font-semibold">Scansiona per scaricare</p>
            </motion.div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 bg-black text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🍎</span>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-300">Scarica su</div>
                  <div className="text-xl font-bold">App Store</div>
                </div>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 bg-black text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-300">Scarica su</div>
                  <div className="text-xl font-bold">Google Play</div>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center mr-3">
              <span className="text-2xl">🐱</span>
            </div>
            <span className="text-2xl font-bold">MicioSocial</span>
          </div>
          <p className="text-gray-400 mb-4">
            Il social network che ogni gatto merita. Fatto con ❤️ per i nostri amici felini.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Termini di Servizio</a>
            <a href="#" className="hover:text-white transition-colors">Contatti</a>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-sm text-gray-500">
            © 2025 MicioSocial. Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </div>
  );
}
