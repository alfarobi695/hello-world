"use client";
import Tombol_1, { Tombol_2, Tombol_3 } from "@/components/button";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Tombol_1 />
        <hr></hr>
        <Tombol_2 isiPesan="Tidak ada pesan" namaTombol="Pesan" />
      </div>
      <br /><br />
      <div className="bg-red-500 onClic={()=>alert('Parent Element : Div')} ">
        <Tombol_3 isiPesan="Child Element : Tombol-1" namaTombol="Pesan"/>
        <Tombol_3 isiPesan="Child Element : Tombol-2" namaTombol="Pesan"/>
      </div>
    </>
  );
}