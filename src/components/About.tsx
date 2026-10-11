import React from 'react';
import { User, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinic.ts';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#03a5fc]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Doctor Card with photo */}
          <div className="fade-up-element lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl bg-[#f2f9fe] p-6 sm:p-8 border border-[#d4efff] shadow-sm text-center">
              {/* Doctor Photo */}
              <div className="relative mx-auto mb-5 flex h-36 w-36 sm:h-40 sm:w-40 items-center justify-center rounded-2xl bg-white border-4 border-[#d4efff] shadow-md overflow-hidden">
                <img
                  src={CLINIC_DATA.doctorImage}
                  alt={CLINIC_DATA.doctor}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute bottom-1.5 right-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#03a5fc] text-white shadow-md border-2 border-white">
                  <ShieldCheck className="h-4 w-4" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                {CLINIC_DATA.doctor}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#027ec0]">
                {CLINIC_DATA.doctorRole}
              </p>
              
              <div className="mt-5 border-t border-[#d4efff] pt-5 text-left text-xs text-slate-600 space-y-2.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#03a5fc] shrink-0" />
                  <span>Patients describe {CLINIC_DATA.doctor} as experienced and polite.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#03a5fc] shrink-0" />
                  <span>Specialist oral and dental care</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#03a5fc] shrink-0" />
                  <span>Mahadeva Road, Arrah</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Clinic Text */}
          <div className="fade-up-element lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#027ec0] bg-[#e6f6ff] px-3 py-1 rounded-lg mb-3 border border-[#03a5fc]/20">
              About The Clinic
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Dedicated to Gentle Oral Healthcare in Arrah
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Somi Dental Clinic is a dental clinic on Mahadeva Road, near Shiv Mandir, Mahajan Toli, Arrah, offering oral maxillofacial, periodontal (gum) and Invisalign orthodontic care.
            </p>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Patients describe {CLINIC_DATA.doctor} as experienced and polite, and the clinic as affordable.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#d4efff] bg-[#f2f9fe] p-4 flex items-start gap-3">
                <Heart className="h-5 w-5 text-[#03a5fc] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Specialist Care</h4>
                  <p className="text-xs text-slate-600 mt-1">Gum, jaw and aligner care</p>
                </div>
              </div>
              <div className="rounded-xl border border-[#d4efff] bg-[#f2f9fe] p-4 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-[#03a5fc] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Convenient Spot</h4>
                  <p className="text-xs text-slate-600 mt-1">Near Shiv Mandir, Mahajan Toli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
