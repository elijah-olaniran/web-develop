alert("js");
const posts = [
        {
            username: "Uswahknits",
            media: "./beanie.png",
            likes: 123_583,
            message: "kikiki! Happiness is proud to have me :)",
            time: "11 HOURS AGO"

        },
        {
            username: "CynthiaHairs",
            media: "./post2.jpg",
            likes: 123_583_230,
            message: "A wig completes your dressing :)",
            time: "11 HOURS AGO"

        },
        {
            username: "simply_haeesha",
            media: "./post1.jpg",
            likes: 123_583,
            message: "My hair is covered but not my brain:)",
            time: "11 HOURS AGO"

        }

    ]
let post_container = document.querySelector(".post_container");

window.onload = () => {
    fetch('http://localthen(res => res.json())
        .then(res => console.log(res))

    posts.forEach(post => {
        post_container.innerHTML += `
<div class="post">
    <div class="top">
        <div class="dp">
            <img width="25px" height="20px" src="./profile.png">
        <div class="profile_name">${post.username}</div> 
        </div>

        <img width="25px" height="20px" src="./elipsis.png">
    </div>
    <img src=${post.media} class="post_image" alt="" srcset="" width="100%">
    <div class="reactions">
        <div class="reaction_panel">
            <div class="lcs">
                <img width="25px" height="20px" src="./heart.png">
                <img width="25px" height="20px" src="./comment.png">
                <img width="25px" height="20px" src="./paper plane.png">
            </div>
            <img width="25px" height="20px" src="./bookmark.png">

        </div>
        <div class="post_texts">
            <div class="likes">${post.likes}</div>
            <div class="message">${post.message}</div>
            <div class="time">${post.time}</div>
        </div>
        <div class="comment">
            <img width="25px" height="20px" src="./smiley 2.png">
            <input type="text" id="comment_text" placeholder="Add a comment"> 
            <button class="post_button">posts</button>
        </div>
    </div>
</div>



     `
    } )
}