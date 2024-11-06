/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('/src/assets/loginbg.jpg')"
      },
      colors: {
        "darkest-blue":"#00072d",
        "darker-blue":"#051650",
        "dark-blue":"#0a2472",
        "light-blue":"#123499",
        "lighter-blue":"#1a43bf",
        "sidebar-bg":"#a1b4cd",
        "alert-bg":"#d9d9d9",
        "sender-bbg":"#3066be",
        "receiver-bg":"#041d56",
        "reciever-text": "#f5f5dc",
        "sender-text":"#fbfff1"
      }
    },
  },
  plugins: [],
}

