# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.destroy_all
# Item.destroy_all

# user_list = User.create!([
#   {
#   first_name: "Betty",
#   last_name: "Vaughn",
#   email: "betty.vaughn@gmail.com",
#   password: "bettyvaughn123",
#   },
#   {
#   first_name: "Caleb",
#   last_name: "Coleman",
#   email: "caleb.coleman@gmail.com",
#   password: "calebcoleman123",
#   },
#   {
#   first_name: "Beulah",
#   last_name: "Rogers",
#   email: "Beulah.Rogers@gmail.com",
#   password: "BeulahRogers123",
#   },
#   {
#   first_name: "Leigh",
#   last_name: "Davis",
#   email: "Leigh.Davis@gmail.com",
#   password: "LeighDavis123",
#   },
#   {
#   first_name: "Guy",
#   last_name: "Wade",
#   email: "Guy.Wade@gmail.com",
#   password: "GuyWade123",
#   },
#   {
#   first_name: "Theodore",
#   last_name: "Figueroa",
#   email: "Theodore.Figueroa@gmail.com",
#   password: "TheodoreFigueroa123",
#   },
#   {
#   first_name: "Thelma",
#   last_name: "Porter",
#   email: "Thelma.Porter@gmail.com",
#   password: "ThelmaPorter123",
#   },
#   {
#   first_name: "Brittany",
#   last_name: "Vasquez",
#   email: "Brittany.Vasquez@gmail.com",
#   password: "BrittanyVasquez123",
#   },
# ])

# puts "#{User.count} users created!"

# item_list = Item.create!([
#   {
#   user_id: 9,
#   title: "ladle",
#   short_description: "tempor id eu nisl nunc",
#   long_description: "at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas",
#   img_url: "https://images.dog.ceo/breeds/dhole/n02115913_3863.jpg",
#   price: 7.99,
#   },
#   {
#   user_id: 10,
#   title: "bonesaw",
#   short_description: "pellentesque habitant morbi tristique senectus",
#   long_description: "massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel",
#   img_url: "https://images.dog.ceo/breeds/retriever-curly/n02099429_1342.jpg",
#   price: 78,
#   },
#   {
#   user_id: 11,
#   title: "bottle of nail polish",
#   short_description: "eget est lorem ipsum dolor",
#   long_description: "habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit",
#   img_url: "https://images.dog.ceo/breeds/mexicanhairless/n02113978_147.jpg",
#   price: 5.5,
#   },
#   {
#   user_id: 9,
#   title: "car",
#   short_description: "scelerisque eleifend donec pretium vulputate",
#   long_description: "sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at",
#   img_url: "https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg",
#   price: 1250,
#   },
#   {
#   user_id: 10,
#   title: "jar of jam",
#   short_description: "blandit aliquam etiam erat velit",
#   long_description: "tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum",
#   img_url: "https://images.dog.ceo/breeds/brabancon/n02112706_888.jpg",
#   price: 5,
#   },
#   {
#   user_id: 11,
#   title: "lotion",
#   short_description: "at tellus at urna condimentum",
#   long_description: "pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt",
#   img_url: "https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg",
#   price: 3.5,
#   },
#   {
#   user_id: 12,
#   title: "pencil",
#   short_description: "eget sit amet tellus cras",
#   long_description: "orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor",
#   img_url: "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_63.jpg",
#   price: 2,
#   },
#   {
#   user_id: 9,
#   title: "toothpick",
#   short_description: "risus viverra adipiscing at in",
#   long_description: "metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque",
#   img_url: "https://images.dog.ceo/breeds/terrier-sealyham/n02095889_3354.jpg",
#   price: 1,
#   },
# ])

# puts "#{Item.count} items created!"


category_list = Category.create!([
  {
  name: "antiques",
  },
  {
  name: "appliances",
  },
  {
  name: "free",
  },
  {
  name: "general",
  },
  {
  name: "jewelry",
  },
  {
  name: "household",
  },
  {
  name: "sporting",
  },
  {
  name: "tools",
  },
])

puts "#{Category.count} categories created!"
