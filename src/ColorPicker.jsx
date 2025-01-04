import { useState } from 'react'

function ColorPicker() {
	const [selectedColor, setSelectedColor] = useState({ hex: null, name: null })
	const [focusedIndex, setFocusedIndex] = useState(null)

	const colors = [
		{ name: 'Red', hex: '#FF0000' },
		{ name: 'Green', hex: '#00FF00' },
		{ name: 'Blue', hex: '#0000FF' },
		{ name: 'Yellow', hex: '#FFFF00' },
		{ name: 'Cyan', hex: '#00FFFF' },
		{ name: 'Magenta', hex: '#FF00FF' },
	]

  const handleClick = (color) => {
    setSelectedColor({hex: color.hex, name: color.name});
    navigator.clipboard.writeText(color.hex);
  }

  const handleMouseEnter = (hex) => {
    setSelectedColor({hex: hex, name:hex});
  }

  const handleMouseLeave = () => {
    setSelectedColor({hex: null, name:null});
  }

  const handleFocus = (index) => {
    setFocusedIndex(index);
    setSelectedColor({hex: colors[index].hex, name: colors[index].name});
  }

  const handleBlur = () => {
    setFocusedIndex(null);
    setSelectedColor({hex: null, name: null});
  }

  const handleKeyDown = (e, index) => {
    if(e.key === 'Enter'){
      setSelectedColor({hex: colors[index].hex, name: colors[index].hex});
      navigator.clipboard.writeText(colors[index].hex);
    }
  }

	return (
		<div className='color-picker'>
			<h1>Color Picker</h1>
			<div className='color-list'>
				{colors.map((color, index) => (
					<div
						key={index}
						className={`color-item ${focusedIndex === index ? 'focused' : ''}`}
						style={{ backgroundColor: color.hex }}
						onClick={() => handleClick(color)}
						onMouseEnter={() => handleMouseEnter(color.hex)}
						onMouseLeave={handleMouseLeave}
						onFocus={() => handleFocus(index)}
						onBlur={handleBlur}
						onKeyDown={(e) => handleKeyDown(e, index)}
						tabIndex={0}
					>
						{selectedColor.hex === color.hex && (
							<span className='color-code'>
								{selectedColor.name || color.hex}
							</span>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default ColorPicker
