
const products = [
    {
        "articleNumber": "d3984cd9-f121-4981-8d03-83198d441379",
        "name": "Black coat",
        "description": "This jacket is long and padded and features a high collar, long sleeves, a double zipper closure with a flap-and-snap fastener and side pockets. This jacket comes in black.",
        "category": "Coats",
        "price": 95,
        "rating": 4,
        "tag": "flash-sale",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/black-coat.png"
      },
      {
        "articleNumber": "20222c00-4548-4149-9efd-49883e9f57b5",
        "name": "Black dress",
        "description": "This mini dress features an off shoulder design with an inner silicone trim, a bodycon fit and a stretchy material. This mini dress comes in black.",
        "category": "Dresses",
        "price": 88,
        "rating": 5,
        "tag": "featured",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/black-dress.png"
      },
      {
        "articleNumber": "19173bb6-20e1-4f81-ae63-c969a23e794e",
        "name": "Black top & pants set",
        "description": "These pants feature a high waist fit, a straight leg with a slit detail, a side zipper closure and a stretchy material. These pants comes in black.",
        "category": "Sets",
        "price": 107,
        "rating": 3,
        "tag": "latest",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/black-set.png"
      },
      {
        "articleNumber": "4bf6d7af-aa33-455c-9403-8301ea13071c",
        "name": "White top & black pants set",
        "description": "This bikini bottom features a triangle design. It has a self-tie drawstring on the sides and underlining. This bikini bottom features a classic fit. This bikini bottom comes in white.",
        "category": "Sets",
        "price": 115,
        "rating": 2,
        "tag": "latest",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/black-white-set.png"
      },
      {
        "articleNumber": "77e280d3-7c56-41d0-8b48-1e5c8a4f1605",
        "name": "Blue jacket",
        "description": "This blazer is oversized and features a pointed lapel neckline, a mock chest pocket, long sleeves with button cuffs, a double-breasted button design, 2 front flap pockets and a back slit detail. This blazer comes in off-white.",
        "category": "Jackets",
        "price": 299,
        "rating": 5,
        "tag": "featured",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/blue-jacket.png"
      },
      {
        "articleNumber": "a268e0d8-010a-44c4-b4f0-738a01117573",
        "name": "Blue hoody & pants",
        "description": "2 front flap pockets and a back slit detail. This blazer comes in off-white.",
        "category": "Sets",
        "price": 150,
        "rating": 5,
        "tag": "flash-sale",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/blue-set.png"
      },
      {
        "articleNumber": "267e6b12-d558-49de-92c2-6b2a59433ce9",
        "name": "Blue t-shirt",
        "description": "Shell: 94% Recycled polyester, 6% Elastane. Lining: 100% Polyester.",
        "category": "T-Shirts",
        "price": 25,
        "rating": 5,
        "tag": "latest",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/blue-tshirt.png"
      },
      {
        "articleNumber": "cda0aa8d-c0e1-41a7-ae26-343ffc84e141",
        "name": "Brown sweater",
        "description": "Mock chest pocket, long sleeves with button cuffs, a double-breasted button",
        "category": "Sweaters",
        "price": 35,
        "rating": 4,
        "tag": "featured",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/brown-sweater.png"
      },
      {
        "articleNumber": "bf1fffeb-c30b-4380-8384-223d3c80b792",
        "name": "Brown watch",
        "description": "Wash with similar colours",
        "category": "Watches",
        "price": 150,
        "rating": 3,
        "tag": "featured",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/brown-watch.png"
      },
      {
        "articleNumber": "6c871493-805c-45e9-b66a-d62dd511c930",
        "name": "Stiletto shoes",
        "description": "Dress for success.",
        "category": "Shoes",
        "price": 89,
        "rating": 3,
        "tag": "flash-sale",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/chrome-shoe.png"
      },
      {
        "articleNumber": "086841a8-fb2e-4ee6-80b1-4dce62e168ae",
        "name": "Gray t-shirt",
        "description": "This cardigan is knitted and features dropped shoulders, long sleeves with ribbed cuffs, a V-neck, a button closure down the front, cropped length and ribbed hems. This cardigan comes in grey.",
        "category": "T-Shirts",
        "price": 15,
        "rating": 3,
        "tag": "featured",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/gray-tshirt.png"
      },
      {
        "articleNumber": "c9a6a993-cd15-4022-8858-77a5bcb6cc12",
        "name": "Jeans dress",
        "description": "100% Acrylic.",
        "category": "Jeans",
        "price": 55,
        "rating": 4,
        "tag": "flash-sale",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/jeans-dress.png"
      },
      {
        "articleNumber": "431255c5-eea7-40bd-9260-06ad7e83fbcd",
        "name": "Jeans jacket & pants",
        "description": "Materials: 80% LENZING™ ECOVERO™ Viscose, 20% Polyamide.",
        "category": "Sets",
        "price": 110,
        "rating": 4,
        "tag": "featured",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/jeans-set.png"
      },
      {
        "articleNumber": "133740ce-f0fe-4ebf-936d-3319237743e2",
        "name": "Olive sweater",
        "description": "V-neck, a button closure down the front, cropped length and ribbed hems",
        "category": "Sweaters",
        "price": 19,
        "rating": 2,
        "tag": "best-selling",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/olive-sweater.png"
      },
      {
        "articleNumber": "dafda4ec-f15e-4e23-b223-b9f037a894a7",
        "name": "Multicolor t-shirt",
        "description": "Slim-fit long sleeve velvet top featuring a ruched sweetheart neckline.",
        "category": "T-shirts",
        "price": 25,
        "rating": 2,
        "tag": "best-selling",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/multicolor-tshirt.png"
      },
      {
        "articleNumber": "b3044087-7272-4885-9da7-69b1b769fa3b",
        "name": "Purple handbag",
        "description": "Leather crossbody bag with a braided flap, adjustable strap and an inner zipper pocket.",
        "category": "Bags",
        "price": 99,
        "rating": 5,
        "tag": "best-selling",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/purple-bag.png"
      },
      {
        "articleNumber": "1721de3f-4104-4a8f-b090-fb385c446146",
        "name": "Red handbag",
        "description": "Leather crossbody bag with a braided flap, adjustable strap and an inner zipper pocket.",
        "category": "Bags",
        "price": 105,
        "rating": 5,
        "tag": "featured",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/red-bag.png"
      },
      {
        "articleNumber": "fab80814-1d85-4c31-a6df-4c0385a1607b",
        "name": "Red dress",
        "description": "Fitted short sleeve collared mini dress, featuring all over flower sequin embroidery and an open back with buttoned closure. ",
        "category": "Dresses",
        "price": 67,
        "rating": 3,
        "tag": "top-reacted",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/red-dress.png"
      },
      {
        "articleNumber": "6e42e94a-7aac-4b65-8dc1-2ba735383f9e",
        "name": "Striped top",
        "description": "Knitted half-zip sweater with a ribbed texture.",
        "category": "Tops",
        "price": 45,
        "rating": 4,
        "tag": "top-reacted",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/striped-top.png"
      },
      {
        "articleNumber": "1920e1c5-c1c9-41b9-a485-1384972474eb",
        "name": "Striped pink pants",
        "description": "Knitted with a ribbed texture.",
        "category": "Pants",
        "price": 36,
        "rating": 2,
        "tag": "top-reacted",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/striped-pants.png"
      },
      {
        "articleNumber": "dbb4a5f2-be55-4931-b19e-54db48bc752a",
        "name": "White seater",
        "description": "Short-sleeved wool top with puff sleeves featuring satin bow embellishment.",
        "category": "Sweaters",
        "price": 25,
        "rating": 2,
        "tag": "featured",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/white-sweater.png"
      },
      {
        "articleNumber": "684a9d63-c7e2-446b-99df-eafdd31426b1",
        "name": "Winter boots",
        "description": "Soft leather boots with a thin heel and a square-shaped toebox.",
        "category": "Shoes",
        "price": 85,
        "rating": 2,
        "tag": "top-reacted",
        "imageName": "https://win22imgstorage.blob.core.windows.net/images/winter-boots.png"
      }
]
module.exports = products

