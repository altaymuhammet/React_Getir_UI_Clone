import React from 'react'

const Cards = () => {

  const cards = [
		{
			title: 'Her siparişinize bir kampanya',
			description: 'Getir\'de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.',
			image: 'https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg'
		},
		{
			title: 'Dakikalar içinde kapınızda',
			description: 'Getir’le siparişiniz dakikalar içinde kapınıza gelir.',
			image: 'https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg'
		},
		{
			title: 'Binlerce çeşit mutluluk',
			description: 'Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.',
			image: 'https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg'
		}
	]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mb-10">
      { cards.map((card, index) => <div key={index} className="w-auto flex flex-col items-center justify-center gap-y-10 text-center shadow-customShadow rounded-lg py-16 px-10">
        <picture>
          <img src={card.image} />
        </picture>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <h3 className="text-brand-color font-semibold">{card.title}</h3>
          <p>{card.description}</p>
        </div>
      </div>)}
    </div>
  )
};


export default Cards