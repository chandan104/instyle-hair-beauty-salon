const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/globals.css');
let content = fs.readFileSync(filePath, 'utf8');

const additional = `
  /* INSTYLE Mobile-First Luxury Styling */
  .text-gradient-rose {
    @apply bg-gradient-to-r from-[#F9A8BA] via-[#E26D85] to-[#C74862] bg-clip-text text-transparent;
  }

  .text-gradient-rose-gold {
    @apply bg-gradient-to-r from-[#F7CAD0] via-[#E07A8B] to-[#D4AF37] bg-clip-text text-transparent;
  }

  .btn-rose-instyle {
    @apply inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#DF6882] to-[#C2455F] hover:from-[#E67891] hover:to-[#CE4E68] shadow-lg shadow-[#DF6882]/30 active:scale-95 transition-all duration-300 min-h-[44px];
  }

  .btn-dark-glass {
    @apply inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 backdrop-blur-md active:scale-95 transition-all duration-300 min-h-[44px];
  }

  .card-instyle {
    @apply bg-white/[0.03] dark:bg-[#151216]/70 backdrop-blur-xl border border-white/10 rounded-3xl p-5 hover:border-[#DF6882]/40 transition-all duration-500 shadow-xl;
  }
}

@keyframes border-beam {
  100% {
    offset-distance: 100%;
  }
}

.animate-border-beam {
  animation: border-beam var(--duration, 15s) infinite linear;
}
`;

const lastBraceIndex = content.lastIndexOf('}');
if (lastBraceIndex !== -1) {
  content = content.slice(0, lastBraceIndex) + additional;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated globals.css');
} else {
  console.error('Could not find closing brace');
}
