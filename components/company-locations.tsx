import Image from "next/image"
import ComapnyLocationCard from "./company-loc-card"

const locations = [
    {
        city: 'Hyderabad',
        country: 'India',
        officeName: 'Headquarters',
        companyName: 'Oink Solutions Private Limited',
        address: '#727, SMR Hi-Lands,SY no: 202(part) and 201/1/AA,Miyapur, Hyderabad - 500049.',
        coordinates: '40.730610, -73.935242',
        phoneNumber: '+91 8341091411',
        image: '/images/locations/hyderabad.webp'
    },
    {
        city: 'Kurnool',
        country: 'India',
        officeName: 'Registered Address',
        companyName: 'Oink Solutions Private Limited',
        address: '# 203, Viswanath Towers, Dharamapeta, Kurnool, Andhra Pradesh, India - 518002.',
        coordinates: '34.052235, -118.243683',
        phoneNumber: '+91 8341091411',
        image: '/images/locations/krnl.jpeg'
    },
    {
        city: 'Bangalore',
        country: 'India',
        officeName: 'Registered Address',
        companyName: 'Oink Solutions Private Limited',
        address: '# 203, Viswanath Towers, Dharamapeta, Kurnool, Andhra Pradesh, India - 518002.',
        coordinates: '34.052235, -118.243683',
        phoneNumber: '+91 8341091411',
        image: '/images/locations/bangalore.jpeg'
    },
]

export default function CompanyLocations() {
    return (
        <div className="flex flex-1 flex-row space-x-20 pt-16 pb-36">
            {locations.map((location) => (
                <ComapnyLocationCard
                    key={location.city}
                    city={location.city}
                    country={location.country}
                    officeName={location.officeName}
                    companyName={location.companyName}
                    address={location.address}
                    phoneNumber={location.phoneNumber}
                    image={location.image}
                />
            ))}
        </div>
    )
}