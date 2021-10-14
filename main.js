var images=["https://st2.depositphotos.com/1967477/8228/v/950/depositphotos_82289046-stock-illustration-cartoon-happy-family-mother-holding.jpg","https://www.pngkey.com/png/detail/960-9607857_indians-clipart-dad-mother-cartoon-images-png.png","https://www.bellybelly.com.au/wp-content/uploads/2014/06/baby-boy.jpg","https://pbs.twimg.com/profile_images/1425719923561488387/-kIJX3I4.jpg","https://c8.alamy.com/comp/E5R54M/11-year-old-girl-E5R54M.jpg","https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2017/04/maxresdefault-1493365193.jpg"];
var names = ["My Mom","My Dad", "My Baby Brother", "My Uncle", "Me", "My Grandma"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
