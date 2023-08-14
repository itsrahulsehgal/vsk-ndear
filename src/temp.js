{officers.map((officer) => (
    <div key={officer.id}>
      <img src={officer.url} className="min-h-0 min-w-0" alt={officer.name} />
      {programs.map((program) => {
        if (program.userRole.includes(officer.id)) {
          return (
            <Link key={program.id} to={`/programs/${program.id}`}>
              {/* Display information about the program */}
              <p>{program.name}</p>
            </Link>
          );
        }
        return null; // No link for this program and officer combination
      })}
    </div>
  ))}