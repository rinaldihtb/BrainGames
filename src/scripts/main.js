bespoke.from('article', {
  keys: true,
  touch: true,
  bullets: 'li, .bullet',
  scale: true,
  hash: true,
  progress: true,
  state: true,
  forms: true
});

function cek_kebenaran(n) 
{
	if (n==1) {
		//alert('Benar');
		var data = document.getElementById('statusB');
		data.className='tampil benar'
		//data.innerHTML = "Benar";
	}
	else 
	{
		var data = document.getElementById('statusS');
		data.className='tampil salah'
	}
		//alert('Salah');
}

function tutup_status(n)
{
	//alert(0);
	if(n==1) {
		var data = document.getElementById('statusB');
		data.className='gaktampil benar'
	} else if(n==0) {
		var data = document.getElementById('statusS');
		data.className='gaktampil salah'
	}
}