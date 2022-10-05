export function Step1() {
	return <>
		<style jsx>{`
			.button-1 {
				height: 48px;
				aspect-ratio: 4;
				border-radius: 12px;
				background-color: white;
				box-shadow: 0 0 0 1px hsl(220deg 100% 25% / 10%);
			}
		`}</style>
		<div class="grid grid-center">
			<div class="card grid grid-center">
				<div class="button-1 grid grid-center">
					Hello, world!
				</div>
			</div>
		</div>
	</>
}

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

export function Step2() {
	return <>
		<style jsx>{`
			.button-2 {
				height: 48px;
				aspect-ratio: 4;
				border-radius: 12px;
				background-color: white;
				box-shadow: 0 0 0 1px hsl(220deg 100% 25% / 10%);
				cursor: pointer;
			}
			.button-2:hover {
				background-color: whitesmoke;
			}
		`}</style>
		<div class="grid grid-center">
			<div class="card grid grid-center">
				<div class="button-2 grid grid-center">
					Hello, world!
				</div>
			</div>
		</div>
	</>
}

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

export function Step3() {
	return <>
		<style jsx>{`
			.button-3 {
				height: 48px;
				aspect-ratio: 4;
				border-radius: 12px;
				background-color: white;
				box-shadow: 0 0 0 1px hsl(220deg 100% 25% / 10%);
				cursor: pointer;
			}
			.button-3:hover {
				background-color: whitesmoke;
			}
			.button-3:hover:active {
				background-color: gray;
			}
		`}</style>
		<div class="grid grid-center">
			<div class="card grid grid-center">
				<div class="button-3 grid grid-center">
					Hello, world!
				</div>
			</div>
		</div>
	</>
}

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

export function Step4() {
	return <>
		<style jsx>{`
			.button-4 {
				height: 48px;
				aspect-ratio: 4;
				border-radius: 12px;
				background-color: white;
				box-shadow: 0 0 0 1px hsl(220deg 100% 25% / 10%);
				cursor: pointer;
			}
			.button-4:hover {
				background-color: whitesmoke;
			}
			.button-4:hover:active {
				background-color: gray;
			}
			.button-4.size-sm {
				height: 32px;
				font-size: 90%;
				border-radius: calc(32px / 4);
			}
			.button-4.size-md {
				height: 48px;
				font-size: 100%;
				border-radius: calc(48px / 4);
			}
			.button-4.size-lg {
				height: 64px;
				font-size: 110%;
				border-radius: calc(64px / 4);
			}
		`}</style>
		<div class="grid grid-center">
			<div class="card flex-row flex-center gap-16px">
				<div class="button-4 size-sm grid grid-center">
					Hello, world!
				</div>
				<div class="button-4 size-md grid grid-center">
					Hello, world!
				</div>
				<div class="button-4 size-lg grid grid-center">
					Hello, world!
				</div>
			</div>
		</div>
	</>
}
