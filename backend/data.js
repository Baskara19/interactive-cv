const educationHistory = [
{ id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yoyakarta', major: 'S1 - Teknik Informatika' },
{ id: 2, period: '2019 - 2022', institution: 'SMA Negeri 1 Belitang', major: 'MIPA' }
];

const skills = [
{ name: 'Vue.js', level: 'Mahir' }, { name: 'JavaScript', level: 'Mahir' },
{ name: 'Tailwind CSS', level: 'Mahir' }, { name: 'Node.js', level: 'Menengah' },
{ name: 'Express.js', level: 'Menengah' }, { name: 'PostgreSQL', level: 'Menengah' },
{ name: 'Git & GitHub', level: 'Mahir' }, { name: 'HTML5 & CSS3', level: 'Mahir' },
];

const projects = [
{ title: 'Technologia', image: '/images/Screenshot_2025-05-16_153845-removebg-preview.png',
description: 'Website informasi laptop', tech: ['Vue.js', 'CI3',
'MYSQL'], link: 'https://github.com/ddaannuu/Project-Website-Laptop.git' },

{ title: 'Aplikasi Vending Machine', image: '/images/vendingmachine.jpg',
description: 'Vending Machine.', tech: ['C++'], link: 'https://github.com/Baskara19/VendingMachine.git' },

 { title: 'Sistem Pendeteksi Kondisi Darurat Ruangan Berbasis Sensor', image: '/images/Mikro.png',
    description: 'Microcontroller project with NodeMCU', tech: ['C++', 'Arduino',
    ], link: 'https://drive.google.com/file/d/1OZRsl1v1E_7o4FJY1gVn2lezkAvPSJs3/view?usp=sharing' }

];

module.exports = { educationHistory, skills, projects };