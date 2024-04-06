const GenderCheckbox = (params) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${params.selectedGender === 'male'? 'selected':''}`}>
					<span className='label-text text-gray-200'>Male</span>
					<input type='checkbox' className='checkbox border-slate-900' 
						checked={params.selectedGender === 'male'}
						onChange={(e) => params.handleCheckBoxChange('male')}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${params.selectedGender === 'female'? 'selected':''}`}>
					<span className='label-text text-gray-200'>Female</span>
					<input type='checkbox' className='checkbox border-slate-900' 
						checked={params.selectedGender === 'female'}
						onChange={(e) => params.handleCheckBoxChange('female')}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;