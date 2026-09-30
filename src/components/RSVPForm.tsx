import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import i18n from '../i18n';

const rsvpSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  guests: z.string().min(1, 'Number of guests is required'),
  attending: z.enum(['yes', 'no'], {
    required_error: 'Please select an option',
  }),
  wishes: z.string().optional(),
});

type RSVPFormValues = z.infer<typeof rsvpSchema>;

export default function RSVPForm() {
  const { t } = useTranslation();
  const isSi = i18n.language === 'si';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<RSVPFormValues>({
    resolver: zodResolver(rsvpSchema),
  });

  const onSubmit = async (data: RSVPFormValues) => {
    setIsSubmitting(true);
    try {
      if (!weddingConfig.rsvpEndpoint) {
        throw new Error('RSVP endpoint not configured');
      }
      
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value || '');
      });

      await fetch(weddingConfig.rsvpEndpoint, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      setIsSuccess(true);
    } catch (error) {
      console.error('RSVP Error:', error);
      alert(t('rsvp.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="relative px-6 py-12 flex flex-col items-center justify-center text-center bg-white/40 backdrop-blur-md rounded-2xl shadow-xl max-w-sm mx-auto overflow-hidden border border-gold/30">
        <div className="absolute inset-0 z-0 bg-[url('/rsvp-frame.png')] bg-[length:100%_100%] bg-center bg-no-repeat mix-blend-multiply opacity-70" />
        
        {/* Transparent Couple in Right Corner */}
        <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-40 mix-blend-multiply pointer-events-none">
          <img src="/couple.png" alt="Couple watermark" className="w-full h-full object-contain" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
          <h2 className="text-2xl font-display font-bold text-maroon mb-2">{t('rsvp.success')}</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-white/40 backdrop-blur-md rounded-2xl shadow-xl max-w-md mx-auto overflow-hidden border border-gold/30 pb-16">
      <div className="absolute inset-0 z-0 bg-[url('/rsvp-frame.png')] bg-[length:100%_100%] bg-center bg-no-repeat mix-blend-multiply opacity-70" />
      
      {/* Transparent Couple in Right Corner */}
      <div className="absolute bottom-0 -right-6 w-56 h-56 opacity-50 mix-blend-multiply pointer-events-none z-0">
        <img src="/couple.png" alt="Couple watermark" className="w-full h-full object-contain" />
      </div>
      
      <div className="relative z-10 pt-10 px-8 pb-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif text-black tracking-widest mb-4">
          RSVP
        </h2>
        <p className="font-serif text-black/80 text-sm sm:text-base leading-relaxed mb-1">
          {isSi ? "කාරුණිකව පිළිතුරු සපයන්න" : "Kindly Reply"}
        </p>
        <p className="font-serif text-black/70 text-xs sm:text-sm">
          {isSi ? "අපගේ විශේෂ දිනයට ඔබට සහභාගී විය හැකිදැයි කරුණාකර අපට දන්වන්න." : "Please let us know if you will be able to join us in celebrating our special day."}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="px-8 space-y-6 relative z-10">
        
        {/* Name */}
        <div className="flex items-end gap-2">
          <label className="font-serif text-black/90 text-sm sm:text-base whitespace-nowrap mb-1">
            {isSi ? "නම:" : "Name:"}
          </label>
          <div className="flex-1">
            <input
              {...register('name')}
              className="w-full bg-transparent border-b-2 border-dotted border-black/40 px-2 py-1 focus:outline-none focus:border-maroon text-black font-serif transition-colors"
              placeholder=""
            />
          </div>
        </div>
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}

        {/* Attendance Options */}
        <div className="space-y-4 pt-4">
          <label className="flex items-center justify-between group cursor-pointer">
            <span className="font-serif text-black/90 text-sm sm:text-base group-hover:text-maroon transition-colors">
              {isSi ? "සතුටින් සහභාගී වෙමි" : "Accepts with Pleasure"}
            </span>
            <input
              type="radio"
              value="yes"
              {...register('attending')}
              className="w-5 h-5 accent-maroon border-black/40 cursor-pointer"
            />
          </label>
          
          <label className="flex items-center justify-between group cursor-pointer">
            <span className="font-serif text-black/90 text-sm sm:text-base group-hover:text-maroon transition-colors">
              {isSi ? "කනගාටුවෙන් දැනුම් දෙමි, පැමිණිය නොහැක" : "Declines with Regret"}
            </span>
            <input
              type="radio"
              value="no"
              {...register('attending')}
              className="w-5 h-5 accent-maroon border-black/40 cursor-pointer"
            />
          </label>
        </div>
        {errors.attending && <p className="text-red-500 text-xs">{errors.attending.message}</p>}

        {/* Guests Count */}
        <div className="flex items-end gap-2 pt-2">
          <label className="font-serif text-black/90 text-sm sm:text-base whitespace-nowrap mb-1">
            {isSi ? "සහභාගී වන ගණන:" : "Number of Guests:"}
          </label>
          <div className="w-16">
            <input
              type="number"
              min="1"
              max="10"
              defaultValue="0"
              {...register('guests')}
              className="w-full bg-transparent border-b-2 border-dotted border-black/40 px-2 py-1 text-center focus:outline-none focus:border-maroon text-black font-serif transition-colors"
            />
          </div>
        </div>

        {/* Wishes (Optional) */}
        <div className="pt-2">
          <label className="block font-serif text-black/90 text-sm sm:text-base mb-2">
            {isSi ? "සුබ පැතුම් (විකල්ප):" : "Wishes (Optional):"}
          </label>
          <textarea
            {...register('wishes')}
            rows={2}
            className="w-full bg-black/5 rounded-md border-0 p-3 focus:outline-none focus:ring-1 focus:ring-maroon text-black font-serif resize-none"
          />
        </div>

        {/* Submit Buttons */}
        <div className="pt-6 space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-maroon text-white font-serif tracking-wider text-sm sm:text-base rounded-md hover:bg-black/80 transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            {isSubmitting ? t('') : (isSi ? 'තහවුරු කරන්න' : 'Submit')}
          </button>
          
          
        </div>

      </form>
    </section>
  );
}
