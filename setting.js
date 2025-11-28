//=====🏅 ᴍᴀʟᴠɪɴ  xᴅ🔥====

module.exports = {
  BOT_NAME: 'uncle jay', // ur bot name
  OWNER_NAME: 'jayhimself', //your name
  OWNER_NUMBER: '260976200467', // add your phone number
  SESSION_ID: 'export default {
    name: "fastflux",
    category: "maker",
    command: ["fastflux", "fflux"],
    run: async (conn, m) => {
        if (!m.text) return m.reply('Masukkan deskripsi yang valid!\nContoh: .fastflux cewek rambut putih di taman');

        try {
            const basePrompt = m.text.trim();
            const prompt = `anime style, high quality, detailed illustration of ${basePrompt}, ultra-detailed, soft lighting, trending on pixiv, masterpiece, beautiful composition, 4k render`;

            const encoded = encodeURIComponent(prompt);
            const apiUrl = `https://fast-flux-demo.replicate.workers.dev/api/generate-image?text=${encoded}`;

            await conn.sendMessage(m.chat, {
                image: { url: apiUrl },
                caption: `⚡ *Fast-Flux AI Image*\n🎨 Prompt: ${basePrompt}`
            }, { quoted: m });
        } catch (err) {
            console.error('Error:', err);
            m.reply('⚠️ Gagal membuat gambar dari Fast-Flux!');
        }
    }
};', // add your session ID
  MODE: "public", // public or private
  TIMEZONE: 'Africa/Harare' // ur timezone
};
