window.onload = async ()=>{
	const omikuji = document.getElementById("omikuji")
	omikuji.addEventListener("mousedown", () => {
		omikuji.classList.add("draw");
	});

	const mt = new MersenneTwister()
	
	omikuji.addEventListener("animationend",async(e)=>{
		// 最後のアニメーションが終わったときだけ発火する
		if (e.animationName === "omikuji-down" ){
			const number = mt.nextInt(1,4)
			console.log("number:"+number)

			window.location.href="result.html?no=" + number
			return
		}
	})
}

