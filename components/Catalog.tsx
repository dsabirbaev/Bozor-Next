
import Image from "next/image"
import CatalogCard from "./UI/Card/CatalogCard"

const Catalog = () => {
  return (
    <section>
        <div className="container">
            <div className="flex justify-between mb-4">
                <CatalogCard  title="Oziq ovqat maxsulotlari" name1="Yog' mahsulotlari" name2="Ketchup, mayonez, sous, sirka" name3="Suv/ichimliklar" name4="Makaron, spagetti va lapsha" img1="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/yogggg.webp" img2="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/ketchup.webp" img3="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/suvvvv.webp" img4="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/makaron.webp"/>
                <CatalogCard title="Maishiy mahsulotlar" name1="Kantselyariya mahsulotlari" name2="Gigiena" name3="Yuvish vositalari" name4="Ho'jalik mollari" img1="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/konsel.webp" img2="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/%D0%9F%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F155555-removebg-preview.webp" img3="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/kakoj-poroshok-luchshe-ariel-persil-tajd1-3-removebg-preview.webp" img4="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/Gc0UjZrbkRXcE1DTnY_-removebg-preview.webp"/>
                <CatalogCard title="Maishiy texnika" name1="Konditsionerlar" name2="Muzlatgichlar" name3="Elektrli va mikroto'lqinli pechlar" name4="Kir yuvish mashinalari" img1="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/konditsianer.webp" img2="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/muzlatgich.webp" img3="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/kir-yuvish-mashinasi.webp" img4="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/mikrotolqin-pech.webp"/>
                
            </div>

            <div className="flex justify-between">
                <CatalogCard title="Smartfon, telefon, gadjet, aksesuarlar" name1="Radiotelefonlar" name2="Telefonlar" name3="Planshetlar" name4="Smartfonlar" img1="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/57a2cee09fff815653f81d8f_hxJ3Xlc_YK11RUn.png" img2="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/57a2cee09fff815653f81d8f_hxJ3Xlc.png" img3="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/planshetttt.png" img4="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/categories/smarttt.png"/>
                
                <div className="rounded-[16px] bg-white min-w-[377px] px-5 py-[18px]">
                    <h2 className="text-[18px] font-['TTInterfaceSemiBold'] mb-5">Televizor, foto-video va audio</h2>
                    <div className="mb-[26px]">
                        <a href="/catalog?show=televizor-foto-video-va-audio"  title="Televizor, foto-video va audio">
                            <Image src="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/tv-1.webp" alt="Televizor, foto-video va audio" width={335} height={308} className="rounded-[16px]" />
                        </a>
                    </div>

                    <a href="/catalog?show=ozi-ovat-masulotlari" className="text-[#2b4fab] underline text-[14px] font-['TTInterfaceMedium']" title="OZIQ OVQAT MAXSULOTLARI">
                        Ko'proq
                    </a>
                </div>

                <div className="rounded-[16px] bg-white min-w-[377px] px-5 py-[18px]">
                    <h2 className="text-[18px] font-['TTInterfaceSemiBold'] mb-5">Kompyuter qurilmalari</h2>
                    <div className="mb-[26px]">
                        <a href="/catalog?show=televizor-foto-video-va-audio" title="Kompyuter qurilmalari">
                            <Image src="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/450b51c6db2528f9dfe1c6c1172f1716.webp" alt="Kompyuter qurilmalari" width={335} height={308} className="rounded-[16px]" />
                        </a>
                    </div>

                    <a href="/catalog?show=ozi-ovat-masulotlari" className="text-[#2b4fab] underline text-[14px] font-['TTInterfaceMedium']" title="OZIQ OVQAT MAXSULOTLARI">
                        Ko'proq
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Catalog