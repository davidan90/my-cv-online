export const IndicatorClasses = {
    classesNames: ['indicator-0', 'indicator-1', 'indicator-2', 'indicator-3'],
    indicatorValue: 0,
    max: 0,

    [Symbol.iterator]: function* gen() {
        let classNameIndex = 0;
        if (this.indicatorValue <= this.max) {
            const variant = Math.floor(this.max / this.classesNames.length);
            let separator = variant;
            let currentClass = this.classesNames[classNameIndex];

            for (let element = 0; element < this.max; element++) {
                if (element >= this.indicatorValue) {
                    yield 'indicator-default';
                } else {
                    if (element >= separator) {
                        currentClass = this.classesNames[classNameIndex];
                        separator = separator + variant;
                        classNameIndex++;
                    }
                    yield currentClass;
                }
            }
        } else {
            yield 'indicator-default';
        }
    }
};
