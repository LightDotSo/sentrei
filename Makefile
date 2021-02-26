postinstall-root:
	( cd apps/dashboard && make postinstall-app )
	( cd apps/demo && make postinstall-app )
	( cd apps/landing && make postinstall-app )

postinstall-app:
	rm -rf components
	make postinstall-vercel

postinstall-vercel:
	if [ $(VERCEL) == 1 ]; then make postinstall-cp ; else make postinstall-ln; fi

postinstall-cp:
	for i in *; do link=$(readlink $i) && rm $i && mv $link $i; done

postinstall-ln:
	ln -s ../../packages/components/src components
