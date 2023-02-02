package main

import (
	"encoding/csv"
	"fmt"
	"io"
	"log"
	"os"
)

type ExpenseSheetRecord struct {
	Date   string
	Name   string
	Amount string
}

func ReadCsvFile(filename string) {
	file, err := os.Open(filename)
	if err != nil {
		log.Fatal(err)
	}

	csvReader := csv.NewReader(file)
	for {
		record, err := csvReader.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatal(err)
		}

		fmt.Printf("%+v\n", record)
	}

	file.Close()
}

func main() {
	fmt.Println("Starting...")
	ReadCsvFile("testData/accountactivity.csv")
}
