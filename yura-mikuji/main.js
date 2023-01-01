window.onload = async ()=>{
	const omikuji = document.getElementById("omikuji")
	omikuji.addEventListener("mousedown", () => {
		omikuji.classList.add("draw");
	});

	const mt = new MersenneTwister()
	
	omikuji.addEventListener("animationend",async(e)=>{
		// 最後のアニメーションが終わったときだけ発火する
		if (e.animationName === "omikuji-down" ){
			// 気持ち0.5秒待機
			await new Promise(resolve => setTimeout(resolve, 500));
			const number = mt.nextInt(1,4)
			console.log("number:"+number)

			window.location.href="result.html?no=" + number
			return
		}
	})
}

